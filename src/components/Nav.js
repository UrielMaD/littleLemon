import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return(
        <nav>
            <ul className="nav-unordered-list">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/menu">Menu</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/reservations">Reservations</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/orderOnline">Order online</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;