const express = require('express')
const router = express.Router()
const bodyParser= require('body-parser');
const uuid= require('uuid')
const inventoryList = require('../data/inventory.json')
const INVENTORY__DATA__FILE = './data/inventory.json'
const fs = require('fs')
router.use(bodyParser.json())
router.use(express.static('website'));
router.use(bodyParser.urlencoded({ extended: false }));

// Route    Get routes/inventory
// Desc     Return the inventory list
router.get('/', (req, res) => {
  res.send(inventoryList)
})

// posting inventory item to inventory.json

router.post('/', (req, res) => {
  const inventoryItemDetail =
  {
    "id": uuid.v4(),
    "item": "Product Name Here",
    "description": "Here is a very brief description of the product…",
    "lastOrdered": "05/24/2018",
    "location": "Toronto, CAN",
    "quantity": "12,000",
    "status": "In Stock"
  }

  inventoryList.push(inventoryItemDetail)
  fs.writeFile(INVENTORY__DATA__FILE, JSON.stringify(inventoryList), (err) => {
    if (err) {
      console.error(err);
      return;
  };
  console.log("Inventory Item has been added");
});
    

  if (!inventoryItemDetail.item || !inventoryItemDetail.description || !inventoryItemDetail.lastOrdered|| !inventoryItemDetail.location|| !inventoryItemDetail.quantity|| !inventoryItemDetail.status) { 
    return res.status(400).send("Please fill in the blank");
  }
  res.json(inventoryList)
});

module.exports = router

