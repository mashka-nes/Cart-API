const express = require("express");
const cartList = express.Router();

let cart = require("./cart-list");

cartList.use(express.json());

cartList.get("/", (req, res) => {
  res.json(cart);
});

cartList.get("/:id", (req, res) => {
  let selectedItem = cart.find(item => item.id === req.params.id);
  if (selectedItem) {
    res.json(selectedItem);
  } else {
    res.status(404).json("Item not found in the cart!");
  }
});

cartList.post("/", (req, res) => {
  cart.push(req.body);
  res.status(201).json(req.body);
});

cartList.put("/:id", (req, res) => {
  const selectedItem = cart.find(item => item.id === req.params.id);
  if (selectedItem) {
    const selectedIndex = cart.indexOf(selectedItem);
    cart[selectedIndex] = req.body;
    res.json(cart[selectedIndex]);
  } else {
    res.status(404).json("Item not found in the cart!"); 
  }
});

cartList.delete("/:id", (req, res) => {
  let selectedItem = cart.find(item => item.id === req.params.id);
  if (selectedItem) {
    const selectedIndex = cart.indexOf(selectedItem);
    cart.splice(selectedIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json("Item not found in the cart!");
  }
});

module.exports = cartList;
