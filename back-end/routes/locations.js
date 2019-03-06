const express = require('express')
const router = express.Router()
const locationList = require('../data/locations.json')
const bodyParser = require('body-parser')

const LOCATION__DATA__FILE = __dirname + '/data/locations.json'
const fs = require('fs')
router.use(bodyParser.json())
router.use(express.static('website'));
router.use(bodyParser.urlencoded({ extended: false }));

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

// posting inventory item to inventory.json

router.post('/', (req, res) => {
  const warehouseDetail =
  {
    "id": "4a8e2ae0-3f97-11e9-b210-d663bd873d93",
    "name": "Warehouse Number 1",
    "address": "469 King St W, Toronto, ON",
    "managerName": "Mara Weinberg",
    "managerTitle": "Warehouse Manager",
    "phone": "+1 416 678 2345",
    "email": "weinberg@instack.com",
    "categories": "Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation",
    "inventory": [
      {
        "id": "e6f704ba-3f97-11e9-b210-d663bd873d93",
        "item": "Product Name Here",
        "description": "Here is a very brief description of the product…",
        "lastOrdered": "05/24/2018",
        "location": "Toronto, CAN",
        "quantity": "12,000",
        "status": "In Stock"
      }]
    }
    
  locationList.push(warehouseDetail)
  fs.writeFile(LOCATION__DATA__FILE, JSON.stringify(locationList), (err) => {
    if (err) {
      console.log('Error writing to file:' , err)
      
    } else {
   return;
    };
    console.log("Warehouse has been added");
});

  if (!warehouseDetail.id || !warehouseDetail.name || !warehouseDetail.address || !warehouseDetail.managerName|| !warehouseDetail.managerTitle|| !warehouseDetail.phone || !warehouseDetail.name || !warehouseDetail.categories || !warehouseDetail.inventory) { 
    return res.status(400).send("Please fill in the blank");
  }
  res.json(locationList)
});










module.exports = router
