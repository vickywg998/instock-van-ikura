import React, { Component } from 'react'
import './styles/styles.scss'
import { Switch, Route } from 'react-router-dom'
import Inventory from './Components/Inventory/Inventory'
import Home from './Components/Home/Home'
import Warehouses from './Components/Warehouses/Warehouses'
import WarehouseDetails from './Components/WarehouseDetails/WarehouseDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/warehouses" component={Warehouses} />
          <Route
            path="/warehouses/:id"
            component={WarehouseDetails}
            // render={routeProps => {
            //   return <WarehouseDetails routeProps={routeProps.match} />
            // }}
          />
          <Route
            path="/inventory"
            render={routeProps => {
              return <Inventory routeProps={routeProps.match} />
            }}
          />
          <Route path="/inventory/:id" component={Inventory} />
        </Switch>
      </div>
    )
  }
}

export default App
