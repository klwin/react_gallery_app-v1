import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchForm from './SearchForm';

const Nav = (props) => (
    <header>

        <SearchForm props={props} /> 
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/flowers">Flowers</NavLink></li>
                <li><NavLink to="/sunsets">Sunsets</NavLink></li>
                <li><NavLink to="/boats">Boats</NavLink></li>
            </ul>
      </nav>
    </header>
);

export default Nav;