import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Menu = () => {
    return (
        <div>
            <ul className="nav">
                <li>
                    <NavLink exact activeClassName='active' to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/weather">Pogoda</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/calculator">Kalkulator</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/toDoList">To do list</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default Menu;