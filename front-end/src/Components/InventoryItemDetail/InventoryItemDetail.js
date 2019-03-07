import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import backArrow from '../../Assets/Icons/Icon-back-arrow.svg'
import './InventoryItemDetail.scss'

export default function WarehouseDetails() {
  return (
    <div className="locationDetails">
      <Navbar />
      <div className="inventoryDetail__container">
        <div className="inventoryDetail__font--wrapper">
          <Link to="/inventory">
            <img src={backArrow} alt="back-arrow" />
          </Link>
          <h1 className="inventoryDetail__font">Product Name</h1>
          <button id="instock__button">In Stock</button>
        </div>
        <div className="inventoryDetail__wrapper">
          <div className="inventoryDetail__top--section">
            <h5 className="locationDetails__label">ITEM DESCRIPTION</h5>
            <h4 className="locationDetails__body--top">Here is a more detailed summary of the product name, it’s uses, industries and
possible attributes that could be used to describe the product.</h4>
          </div>        
          <div className ="inventoryDetail__section--wrapper">
          <div className="inventoryDetail__top--section">
            <h5 className="inventoryDetails__label">ORDERED BY</h5>
            <h4 className="inventoryDetails__body--top">
              Mark Saunders
            </h4>
            <h5 className="inventoryDetails__label">LAST ORDERED</h5>
            <h4 className="inventoryDetails__body--top">
              2018-05-24
            </h4>
            <h5 className="inventoryDetails__label">QUANTITY</h5>
            <h4 className="inventoryDetails__body--top">
              12000
            </h4>
            <h5 className="inventoryDetails__label">CATEGORIES</h5>
            <h4 className="inventoryDetails__body--top">
            Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation, Sales
            </h4>
           
          </div>
          <div className="inventoryDetail__top--section">
            <h5 className="inventoryDetails__label">REFERENCE NUMBER</h5>
            <h4 className="inventoryDetails__body--top">JK2020FD7811201</h4>
            <h5 className="inventoryDetails__label">LOCATION</h5>
            <h4>Toronto, CAN</h4>
          </div>
          </div>
        </div>
        <div className="inventoryDetail__wrapper--edit">
            <button id="inventoryDetail__edit--button">EDIT</button>
          </div>
      </div>
    </div>
  )
}
