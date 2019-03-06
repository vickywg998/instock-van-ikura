const express = require('express')
const router = express.Router()
const locationList = require('../data/locations.json')

// Route    Get routes/locations
// Desc     Return the location list
router.get('/', (req, res) => {
  res.send(locationList)
})

// Route    Get routes/locations/:id
// Desc     Return a specific location by id with its inventory
router.get('/:locationId', (req, res) => {
  const ids = locationList.map(location => location.id)
  const idIndex = ids.indexOf(req.params.locationId)
  idIndex !== -1
    ? res.status(200).send(locationList[idIndex])
    : res.status(404).send({ message: 'No location with this id' })
})

console.log('test')
module.exports = router
