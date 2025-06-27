import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { log } from "../utils/logger";

// This is a mock example. Replace with your actual lookup logic
const mockStorage = JSON.parse(localStorage.getItem("shortenedUrls")) || [];

const RedirectPage = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const match = mockStorage.find((item) => {
      return item.shortUrl.endsWith("/" + shortcode);
    });

    if (match) {
      log("frontend", "info", "route", `Redirecting ${shortcode} → ${match.longUrl}`);
      window.location.href = match.longUrl;
    } else {
      log("frontend", "error", "route", `Shortcode not found: ${shortcode}`);
      alert("Invalid or expired short link");
    }
  }, [shortcode]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
