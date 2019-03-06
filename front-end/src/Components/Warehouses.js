import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Warehouse from './Warehouse'

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

      <Navbar routeProps={this.props.routeProps}/>
      <div className="locationlist__container">
        <div className="locationlist__wrapper">
          <h1 className="location__font">Locations</h1>
          <input type="text" placeholder="Search" className="search" />
        </div>
        <table className="Locationtable">
          <tbody>
            <tr>
              <th>WAREHOUSE</th>
              <th>CONTACT</th>
              <th>CONTACT INFORMATION</th>
              <th>CATEGORIES</th>
            </tr>
          </tbody>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}

export default Warehouses
