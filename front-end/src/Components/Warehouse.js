import React from 'react'

export default function Warehouse(props) {
  return (
    <tr>
      <td className="warehouse">
        {props.name}
        <br />
        <p className="description__font">{props.address}</p>
      </td>
      <td className="warehouse__contact">
        {props.managerName}
        <br />
        {props.managerTitle}
      </td>
      <td className="warehouse__contact--info">
        {props.phone}
        <br />
        {props.email}
      </td>
      <td className="warehouse__categories">{props.categories}</td>
    </tr>
  )
}
