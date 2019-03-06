import React from 'react'
import { Link } from 'react-router-dom'
import backArrow from '../../Assets/Icons/Icon-back-arrow.svg'

export default function WarehouseDetails() {
  return (
    <>
      <div>
        <div>
          <Link to="/warehouses">
            <img src={backArrow} alt="back-arrow" />
          </Link>

          <h1>Warehouse Name</h1>
        </div>
        <div>
          <h5>ADDRESS</h5>
          <h4>123 Main Street W. Suite 201</h4>
          <h4>Toronto, ON M65GB7 CA</h4>
        </div>
        <div>
          <h5>CONTACT</h5>
          <h4>Mara Weinberg</h4>
          <h4>Warehouse Manager</h4>
          <h4>+1 416 678 2345</h4>
          <h4>weinberg@instock.com</h4>
        </div>
      </div>
      <div>
        <div>
          <h5>ITEM</h5>
          <h4>Product Name Here</h4>
          <h4>
            Here is a very brief description of the product in the inventory…
          </h4>
        </div>
        <div>
          <h5>LAST ORDERED</h5>
          <h4>05/24/2018</h4>
        </div>
        <div>
          <h5>LOCATION</h5>
          <h4>Toronto, CAN</h4>
        </div>
        <div>
          <h5>QUANTITY</h5>
          <h4>12,000</h4>
        </div>
        <div>
          <h5>STATUS</h5>
          <h4>In Stock</h4>
        </div>
      </div>
    </>
  )
}
