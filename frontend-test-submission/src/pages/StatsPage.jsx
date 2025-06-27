import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const StatsPage = () => {
  const location = useLocation();
  const stats = location.state?.stats || [];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>

      {stats.length === 0 ? (
        <Typography>No data available.</Typography>
      ) : (
        stats.map((url, index) => (
          <Box key={index} my={2}>
            <Typography variant="h6">{url.shortUrl}</Typography>
            <Typography variant="body2">
              Original: {url.longUrl}
              <br />
              Created At: {url.createdAt}
              <br />
              Expires At: {url.expiresAt}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography>Clicks: {url.clicks.length}</Typography>
            <List dense>
              {url.clicks.map((click, i) => (
                <ListItem key={i}>
                  <ListItemText
                    primary={`Time: ${click.timestamp}`}
                    secondary={`Source: ${click.source} | Location: ${click.location}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        ))
      )}
    </Container>
  );
};

export default StatsPage;
