const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Salut");
});

app.listen(3000);
console.log("Attente de requêtes au port 3000");
