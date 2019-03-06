const express = require('express')
const router = express.Router()
const locationList = require('../data/locations.json')

// Route    Get routes/inventory
// Desc     Return the inventory list
router.get('/', (req, res) => {
  res.send(locationList)
})

module.exports = router
