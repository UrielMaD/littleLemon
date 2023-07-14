import React from 'react';

const Nav = () => {

    return(
        <nav>
            <ul className="nav-unordered-list">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Menu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Reservations</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Order online</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;