import React, { Component } from "react";

class Warehouses extends Component {
  render() {
    return (
      <>
        <div className="warehouse__header">
          <h1>Locations</h1>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <h2 className="warehouse__name">Warehouse Number 1</h2>
          <h4 className="warehouse__address">469 King St W, Toronto, ON</h4>
          <h4 className="warehouse__manager--name">Mara Weinberg</h4>
          <h4 className="warehouse__manager--title">Warehouse Manager</h4>
          <h4 className="warehouse__phone">+1 416 678 2345</h4>
          <h4 className="warehouse__email">weinberg@instack.com</h4>
          <h4 className="warehouse__type">
            Industrial, Automotive, Heavy, Mechanical, Engineering,
            Transportation
          </h4>
        </div>
      </>
    );
  }
}

export default Warehouses;
