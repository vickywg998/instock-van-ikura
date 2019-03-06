const express = require('express')
const router = express.Router()
const inventoryList = require('../data/inventory.json')

// Route    Get routes/inventory
// Desc     Return the inventory list
router.get('/', (req, res) => {
  res.send(inventoryList)
})

module.exports = router
