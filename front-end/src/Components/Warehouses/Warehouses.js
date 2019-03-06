import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Warehouse from '../Warehouse/Warehouse'
import './Warehouses.scss'

class Warehouses extends Component {
  state = {
    data: [
      {
        name: 'Warehouse Number 1',
        address: '469 King St W, Toronto, ON',
        managerName: 'Mara Weinberg',
        managerTitle: 'Warehouse Manager',
        phone: '+1 416 678 2345',
        email: 'weinberg@instack.com',
        categories:
          'Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation',
      },
      {
        name: 'Warehouse Number 1',
        address: '469 King St W, Toronto, ON',
        managerName: 'Mara Weinberg',
        managerTitle: 'Warehouse Manager',
        phone: '+1 416 678 2345',
        email: 'weinberg@instack.com',
        categories:
          'Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation',
      },
      {
        name: 'Warehouse Number 1',
        address: '469 King St W, Toronto, ON',
        managerName: 'Mara Weinberg',
        managerTitle: 'Warehouse Manager',
        phone: '+1 416 678 2345',
        email: 'weinberg@instack.com',
        categories:
          'Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation',
      },
      {
        name: 'Warehouse Number 1',
        address: '469 King St W, Toronto, ON',
        managerName: 'Mara Weinberg',
        managerTitle: 'Warehouse Manager',
        phone: '+1 416 678 2345',
        email: 'weinberg@instack.com',
        categories:
          'Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation',
      },
      {
        name: 'Warehouse Number 1',
        address: '469 King St W, Toronto, ON',
        managerName: 'Mara Weinberg',
        managerTitle: 'Warehouse Manager',
        phone: '+1 416 678 2345',
        email: 'weinberg@instack.com',
        categories:
          'Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation',
      },
      {
        name: 'Warehouse Number 1',
        address: '469 King St W, Toronto, ON',
        managerName: 'Mara Weinberg',
        managerTitle: 'Warehouse Manager',
        phone: '+1 416 678 2345',
        email: 'weinberg@instack.com',
        categories:
          'Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation',
      },
      {
        name: 'Warehouse Number 1',
        address: '469 King St W, Toronto, ON',
        managerName: 'Mara Weinberg',
        managerTitle: 'Warehouse Manager',
        phone: '+1 416 678 2345',
        email: 'weinberg@instack.com',
        categories:
          'Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation',
      },
      {
        name: 'Warehouse Number 1',
        address: '469 King St W, Toronto, ON',
        managerName: 'Mara Weinberg',
        managerTitle: 'Warehouse Manager',
        phone: '+1 416 678 2345',
        email: 'weinberg@instack.com',
        categories:
          'Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation',
      },
      {
        name: 'Warehouse Number 1',
        address: '469 King St W, Toronto, ON',
        managerName: 'Mara Weinberg',
        managerTitle: 'Warehouse Manager',
        phone: '+1 416 678 2345',
        email: 'weinberg@instack.com',
        categories:
          'Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation',
      },
    ],
  }

  render() {
    let rows = this.state.data.map((warehouse, i) => {
      return (
        <Warehouse
          key={i}
          name={warehouse.name}
          address={warehouse.address}
          managerName={warehouse.managerName}
          managerTitle={warehouse.managerTitle}
          phone={warehouse.phone}
          email={warehouse.email}
          categories={warehouse.categories}
        />
      )
    })
    return (
      <>
        <Navbar routeProps={this.props.routeProps} />
        <div className="location__container">
          <div className="location__header">
            <h1 className="location__title">Locations</h1>
            <input type="text" placeholder="Search" className="search" />
          </div>
          <div className="locations">{rows}</div>
        </div>
      </>
    )
  }
}

export default Warehouses
