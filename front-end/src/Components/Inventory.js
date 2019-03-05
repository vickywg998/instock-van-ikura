import React, { Component } from 'react';
import InventoryList from './InventoryList'

class Inventory extends Component {
    render() {
        return (
            <div className="inventorylist__container">
                <div className="inventorylist__wrapper">
                    <h1>Inventory</h1>
                    <input className="search" placeholder="Search" />
                </div>
                <InventoryList />
            </div>
        )
    }
}

export default Inventory;
