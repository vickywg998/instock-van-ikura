import React from 'react'
import InventoryItem from '../InventoryItem/InventoryItem'

class InventoryList extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          item: 'Product Name Here',
          description: 'Here is a very brief description of the product…',
          lastOrdered: '05/24/2018',
          location: 'Toronto, CAN',
          quantity: '12,000',
          status: 'In Stock',
        },
        {
          item: 'Product Name Here',
          description: 'Here is a very brief description of the product…',
          lastOrdered: '05/24/2018',
          location: 'Toronto, CAN',
          quantity: '12,000',
          status: 'Out of Stock',
        },
        {
          item: 'Product Name Here',
          description: 'Here is a very brief description of the product…',
          lastOrdered: '05/24/2018',
          location: 'Toronto, CAN',
          quantity: '12,000',
          status: 'In Stock',
        },
        {
          item: 'Product Name Here',
          description: 'Here is a very brief description of the product…',
          lastOrdered: '05/24/2018',
          location: 'Toronto, CAN',
          quantity: '12,000',
          status: 'Out of Stock',
        },
        {
          item: 'Product Name Here',
          description: 'Here is a very brief description of the product…',
          lastOrdered: '05/24/2018',
          location: 'Toronto, CAN',
          quantity: '12,000',
          status: 'In Stock',
        },
        {
          item: 'Product Name Here',
          description: 'Here is a very brief description of the product…',
          lastOrdered: '05/24/2018',
          location: 'Toronto, CAN',
          quantity: '12,000',
          status: 'Out of Stock',
        },
        {
          item: 'Product Name Here',
          description: 'Here is a very brief description of the product…',
          lastOrdered: '05/24/2018',
          location: 'Toronto, CAN',
          quantity: '12,000',
          status: 'In Stock',
        },
        {
          item: 'Product Name Here',
          description: 'Here is a very brief description of the product…',
          lastOrdered: '05/24/2018',
          location: 'Toronto, CAN',
          quantity: '12,000',
          status: 'Out of Stock',
        },

        {
          item: 'Product Name Here',
          description: 'Here is a very brief description of the product…',
          lastOrdered: '05/24/2018',
          location: 'Toronto, CAN',
          quantity: '12,000',
          status: 'Out of Stock',
        },
      ],
    }
  }
  render() {
    let rows = this.state.data.map((item, i) => {
      return (
        <InventoryItem
          item={item.item}
          description={item.description}
          lastOrdered={item.lastOrdered}
          location={item.location}
          quantity={item.quantity}
          status={item.status}
          key={i}
          data={item}
        />
      )
    })

    return (
      <table className="Inventorytable">
        <tbody>
          <tr>
            <th>ITEM</th>
            <th>LAST ORDERED</th>
            <th>LOCATION</th>
            <th>QUANTITY</th>
            <th>STATUS</th>
          </tr>
        </tbody>

        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default InventoryList
