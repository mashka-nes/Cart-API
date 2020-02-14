const express = require("express");
const app = express();
const port = 3000;
const cart = require("./cart-routes");

app.listen(port, () => console.log(`Listening on port: ${port}.`));

app.use("/cart-list/", cart);

app.get("/", (req, res) => {
  res.json("Welcome to your shopping cart!");
});