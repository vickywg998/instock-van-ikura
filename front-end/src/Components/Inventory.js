import React, { Component } from 'react';
import InventoryList from './InventoryList'

class Inventory extends Component {
    render() {
        return (
            <div className="inventorylist__container">
                <div className="inventorylist__wrapper">
                    <h1 className="inventory__font">Inventory</h1>
                    <input className="search" placeholder="Search" />
                </div>
                <div id="card">
                    <InventoryList />
                </div>
            </div>
        )
    }
}

export default Inventory;
