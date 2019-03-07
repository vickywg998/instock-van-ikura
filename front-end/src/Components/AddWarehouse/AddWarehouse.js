import React from 'react'

export default function AddWarehouse() {
  return (
    <div>
      <h1>Add New</h1>
      <div className="add__name">
        <h5>WAREHOUSE</h5>
        <input type="text" placeholder="Name & ID" />
      </div>
      <div className="add__address">
        <div>
          <h5>ADDRESS</h5>
          <input type="text" placeholder="Enter Address" />
        </div>
        <div>
          <h5>LOCATION</h5>
          <select>
            <option>Toronto, CAN</option>
          </select>
        </div>
      </div>
      <div className="add__contact--name">
        <div>
          <h5>CONTACT NAME</h5>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div>
          <h5>POSITION</h5>
          <input type="text" placeholder="Enter Position" />
        </div>
      </div>
      <div className="add__contact--info">
        <div>
          <h5>PHONE NUMBER</h5>
          <input type="text" placeholder="(000) - 000 - 0000" />
        </div>
        <div>
          <h5>EMAIL</h5>
          <input type="text" placeholder="email@instock.com" />
        </div>
      </div>
      <div>
        <h5>EMAIL</h5>
        <textarea placeholder="Use commas to separate each category" />
      </div>
      <div className="add__actionButton">
        <button>CANCEL</button>
        <button>SAVE</button>
      </div>
    </div>
  )
}
