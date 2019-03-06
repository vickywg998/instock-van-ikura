const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8080
const inventory = require('./routes/inventory')
const locations = require('./routes/locations')

app.use(bodyParser.json())
app.use(cors())
app.use('/inventory', inventory)
app.use('/locations', locations)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
