import React, { Component } from 'react';
import './styles/styles.scss'
import { Switch, Route } from 'react-router-dom'
import Inventory from './Components/Inventory/Inventory'
import Home from './Components/Home/Home'
import Warehouses from './Components/Warehouses/Warehouses'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/warehouses" render={(routeProps) => {
            return (<Warehouses routeProps={routeProps.match} />)
          }} />
          <Route path="/warehouses/:id" component={Warehouses} />


          <Route path="/inventory" render={(routeProps) => {
            return (<Inventory routeProps={routeProps.match} />)
          }} />
          <Route path="/inventory/:id" component={Inventory} />
        </Switch>
      </div>
    );
  }
}

export default App;
