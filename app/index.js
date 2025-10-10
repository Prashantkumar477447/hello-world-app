// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h1>Hello from GCP Cloud Run!</h1><p>Deployed using Cloud Build + Artifact Registry + Cloud Run (GUI Flow)</p>");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
