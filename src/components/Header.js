import React from 'react';

import logo from '../assets/little lemon.png';
import Nav from './Nav';

const Home = () => {

    return (
        <header className="header">
            <img className="logo" src={logo} alt="little lemon logo" />
            <Nav />
        </header>
    )
};

export default Home;