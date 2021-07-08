import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="main-nav">
            <ul>
            <li><NavLink to="/flowers">Flowers</NavLink></li>
            <li><NavLink to="/sunsets">Sunsets</NavLink></li>
            <li><NavLink to="/boats">Boats</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;