import React from 'react'
import './AddWarehouse.scss'

export default function AddWarehouse(props) {
  return (
    <div className="AddWarehouse">
      <h1 className="addwarehouse__title">Add New</h1>
      <div className="add__name">
        <h5>WAREHOUSE</h5>
        <input className="input" type="text" placeholder="Name & ID" />
      </div>
      <div className="add__address">
        <div>
          <h5>ADDRESS</h5>
          <input className="input" type="text" placeholder="Enter Address" />
        </div>
        <div>
          <h5>LOCATION</h5>
          <select className="input">
            <option value="toronto">Toronto, CAN</option>
          </select>
        </div>
      </div>
      <div className="add__contact--name">
        <div>
          <h5>CONTACT NAME</h5>
          <input className="input" type="text" placeholder="Enter Name" />
        </div>
        <div>
          <h5>POSITION</h5>
          <input className="input" type="text" placeholder="Enter Position" />
        </div>
      </div>
      <div className="add__contact--info">
        <div>
          <h5>PHONE NUMBER</h5>
          <input
            className="input"
            type="text"
            placeholder="(000) - 000 - 0000"
          />
        </div>
        <div>
          <h5>EMAIL</h5>
          <input
            className="input"
            type="text"
            placeholder="email@instock.com"
          />
        </div>
      </div>
      <div>
        <h5>ITEM DESCRIPTION</h5>
        <textarea
          className="input description"
          placeholder="Use commas to separate each category"
        />
      </div>
      <div className="add__actionButton">
        <button className="btn-action btn-save">SAVE</button>
        <button className="btn-action btn-cancel" onClick={props.closeModal}>
          CANCEL
        </button>
      </div>
    </div>
  )
}
