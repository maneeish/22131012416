import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { log } from "../utils/logger";
import { shortenUrl } from "../services/shortenService";

const ShortenerPage = () => {
  const [links, setLinks] = useState([{ url: "", validity: "", shortcode: "" }]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    const updatedLinks = [...links];
    updatedLinks[index][field] = value;
    setLinks(updatedLinks);
  };

  const addLinkInput = () => {
    if (links.length < 5) {
      setLinks([...links, { url: "", validity: "", shortcode: "" }]);
    }
  };

  const handleSubmit = async () => {
    try {
      const newResults = [];

      for (const link of links) {
        const url = link.url.trim();
        const validity = link.validity.trim() || "30"; // default 30 mins
        const shortcode = link.shortcode.trim();

        if (!url.startsWith("http")) {
          await log("frontend", "error", "component", "Invalid URL format");
          alert("Invalid URL format: " + url);
          return;
        }

        if (isNaN(validity)) {
          await log("frontend", "error", "component", "Invalid validity");
          alert("Validity must be a number: " + validity);
          return;
        }

        const result = await shortenUrl(url, parseInt(validity), shortcode);
        newResults.push(result);

        await log("frontend", "info", "component", "Short URL created");
      }

      setResults((prev) => {
        const all = [...prev, ...newResults];
        localStorage.setItem("shortenedUrls", JSON.stringify(all));
        return all;
      });

    } catch (err) {
      await log("frontend", "error", "component", "Shorten request failed");
      alert("Something went wrong.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>

      {links.map((link, index) => (
        <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              label="Long URL"
              value={link.url}
              onChange={(e) => handleChange(index, "url", e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Validity (minutes)"
              value={link.validity}
              onChange={(e) => handleChange(index, "validity", e.target.value)}
              placeholder="Default: 30"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Custom Shortcode (optional)"
              value={link.shortcode}
              onChange={(e) => handleChange(index, "shortcode", e.target.value)}
            />
          </Grid>
        </Grid>
      ))}

      <Box marginTop={2}>
        <Button variant="contained" onClick={addLinkInput} sx={{ marginRight: 2 }}>
          Add More
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Shorten URLs
        </Button>
      </Box>

      <Box marginTop={4}>
        <Typography variant="h5">Results:</Typography>
        {results.map((res, idx) => (
          <Box key={idx} mt={1}>
            <strong>Short URL:</strong>{" "}
            <a href={res.shortUrl} target="_blank" rel="noopener noreferrer">
              {res.shortUrl}
            </a>
            <br />
            <strong>Expires At:</strong> {res.expiresAt}
          </Box>
        ))}

        {results.length > 0 && (
          <Button
            variant="outlined"
            sx={{ marginTop: 2 }}
            onClick={() => navigate("/stats", { state: { stats: results } })}
          >
            View Statistics
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default ShortenerPage;
