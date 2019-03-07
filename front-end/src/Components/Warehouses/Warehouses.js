import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Warehouse from '../Warehouse/Warehouse'
import AddWarehouse from '../AddWarehouse/AddWarehouse'
import Modal from '../UI/Modal/Modal'
import addIcon from '../../Assets/Icons/Icon-add.svg'
import './Warehouses.scss'

class Warehouses extends Component {
  state = {
    adding: false,
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

  handleAddingLocation = () => {
    this.setState({ adding: true })
    console.log(this.state.adding)
  }

  handleCancelAddingLocation = () => {
    this.setState({ adding: false })
    console.log(this.state.adding)
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
        <Modal
          show={this.state.adding}
          closeModal={this.handleCancelAddingLocation}
        >
          <AddWarehouse />
        </Modal>
        <Navbar routeProps={this.props.routeProps} />
        <div className="location__container">
          <div className="location__header">
            <h1 className="location__title">Locations</h1>
            <input type="text" placeholder="Search" className="search" />
          </div>
          <div className="locations">{rows}</div>
          <div className="location__add btn-add">
            <img
              className="location__add--btn"
              src={addIcon}
              alt="add-button"
              onClick={this.handleAddingLocation}
            />
          </div>
        </div>
      </>
    )
  }
}

export default Warehouses
