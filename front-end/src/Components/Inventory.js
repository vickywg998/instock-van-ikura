import React, { Component } from 'react';
import InventoryList from './InventoryList'
import Navbar from './Navbar/Navbar'

class Inventory extends Component {
    render() {
        return (
            <div>
            <Navbar routeProps={this.props.routeProps}/>
            <div className="inventorylist__container">
                <div className="inventorylist__wrapper">
                    <h1>Inventory</h1>
                    <input className="search" placeholder="Search" />
                </div>
                <InventoryList />
            </div>
            </div>
        )
    }
}

export default Inventory;
