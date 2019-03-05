import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <header className="tablet desktop">
                <div className="logo__container" >
                <Link to="/"><img src='/Assets/Logo/Logo-instock.svg' alt='logo' className="logo" /></Link>
                </div>

                <nav className="header__wrapper">
                    <Link to ="/inventory">Inventory </Link>
                    <Link to ="/warehouses">Locations </Link>
                </nav>

            </header>
        )
    }
}



export default Navbar;
