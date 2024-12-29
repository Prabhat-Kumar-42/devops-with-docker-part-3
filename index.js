const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1><h4>test-update-3</h4>");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
