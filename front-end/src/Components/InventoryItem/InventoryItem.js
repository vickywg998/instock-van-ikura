import React from 'react'
import dot from '../../Assets/Icons/Icon-kebab-default.svg'
const InventoryItem = props => {
  return (
    <tr>
      <td data-label="ITEM">
        {props.data.item}
        <br />
        <p className="description__font">{props.data.description}</p>
      </td>
      <td data-label="LAST ORDERED">{props.data.lastOrdered}</td>
      <td data-label="LOCATION">{props.data.location}</td>
      <td data-label="QUANTITY">{props.data.quantity}</td>
      <td data-label="STATUS">{props.data.status}</td>
      <td data-label="DOT">
        <img src={dot} alt="" />
      </td>
    </tr>
  )
}

export default InventoryItem
