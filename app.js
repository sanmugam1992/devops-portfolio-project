const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Welcome to My DevOps Portfolio Project! CI/CD Demo Running Successfully.");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
