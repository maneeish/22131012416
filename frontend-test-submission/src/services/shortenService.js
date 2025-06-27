export const shortenUrl = (url, validity, shortcode) => {
  const expiresAt = new Date(Date.now() + (validity || 30) * 60000).toLocaleString();
  const short = shortcode || Math.random().toString(36).substring(2, 7);
  const shortUrl = `http://localhost:3000/${short}`;

  const newLink = {
    originalUrl: url,
    shortUrl,
    expiresAt,
    shortcode: short,
  };

  const stored = JSON.parse(localStorage.getItem("shortenedUrls") || "[]");
  stored.push(newLink);
  localStorage.setItem("shortenedUrls", JSON.stringify(stored));

  return newLink;
};
