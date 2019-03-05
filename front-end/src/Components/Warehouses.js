import React, { Component } from 'react'
import Warehouse from './Warehouse'

class Warehouses extends Component {
  render() {
    return (
      <>
        <div className="warehouse__header">
          <h1>Locations</h1>
          <input type="text" placeholder="Search" />
        </div>
        <Warehouse />
      </>
    )
  }
}

export default Warehouses
