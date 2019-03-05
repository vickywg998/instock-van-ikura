import React, {Component} from 'react';

const InventoryItem  = props => {
  return (
    <tr>
      <td>
        {props.data.item}
      </td>
      <td>
        { props.data.lastOrdered}
      </td>
      <td>
        { props.data.location} 
      </td>
      <td>
        { props.data.quantity} 
      </td>
      <td>
        { props.data.status}
      </td>
    </tr>
  );  
}

  export default InventoryItem