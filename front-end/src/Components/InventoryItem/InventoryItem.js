import React from 'react'
import dot from '../../Assets/Icons/Icon-kebab-default.svg'
import './InventoryItem.scss'
import { Link } from 'react-router-dom'

const InventoryItem = props => {
  return (
    <tr>
        <td data-label="ITEM">
        <Link id="link__color--black" to={`/inventory/${props.data.id}`}>
          {props.data.item}
          <br />
          <p className="description__font">{props.data.description}</p>
          </Link>
        </td>
     
      <td data-label="LAST ORDERED">{props.data.lastOrdered}</td>
      <td data-label="LOCATION">{props.data.location}</td>
      <td data-label="QUANTITY">{props.data.quantity}</td>
      <td data-label="STATUS">{props.data.status}</td>
      <td data-label="DOT">
        <Link to={`inventory/${props.data.id}`}><img src={dot} alt="" /></Link>
      </td>
    </tr>
  )
}

export default InventoryItem

