import React from 'react'

export default function Warehouse(props) {
  return (
    <tr>
      <td data-label="WAREHOUSE">
        {props.name}
        <br />
        <p className="description__font">{props.address}</p>
      </td>
      <td data-label="CONTACT">
        {props.managerName}
        <br />
        {props.managerTitle}
      </td>
      <td data-label="CONTACT INFORMATION">
        {props.phone}
        <br />
        {props.email}
      </td>
      <td data-label="CATEGORIES">{props.categories}</td>
    </tr>
  )
}
