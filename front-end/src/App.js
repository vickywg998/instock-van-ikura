import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Inventory from './Components/Inventory'
import Home from './Components/Home'
import Warehouses from './Components/Warehouses'
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/warehouses" component={Warehouses} />
          <Route path="/warehouses/:id" component={Warehouses} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/inventory/:id" component={Inventory} />
        </Switch>
      </div>
    );
  }
}

export default App;
