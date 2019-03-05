import React, { Component } from 'react';
import dot from '../Assets/Icons/Icon-kebab-default.svg'
const InventoryItem = props => {
  return (
    <tr>
      <td>
        {props.data.item}<br />
        <p className="description__font">{props.data.description}</p>
      </td>
      <td>
        {props.data.lastOrdered}
      </td>
      <td>
        {props.data.location}
      </td>
      <td>
        {props.data.quantity}
      </td>
      <td>
        {props.data.status}
      </td>
      <td>
        <img src={dot} alt=''/>
      </td>
    </tr>
  );
}

export default InventoryItem