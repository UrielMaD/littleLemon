import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

    return (
        <main className="main">
            <section className="hero-section">
                <div className="hero-section-text-container">
                    <h1 className="hero-section-title">Little Lemon</h1>
                    <h4 className="hero-section-subtitle">Chicago</h4>
                    <p className="hero-section-description">
                        We are a family owned Mediterranean restaurant, focused on traditional
                        recipies served with a modern twist.
                    </p>
                    <div>
                        <Link to="/bookingPage">
                            <button className="button">
                                Reserve a Table
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hero-sectoion-image-container">
                </div>
            </section>
            <section className="highlights-section">
                <div className="highlights-header">
                    <h1>This weeks specials!</h1>
                    <button className="button">
                        Online Menu
                    </button>
                </div>
                <div className="highlights">

                </div>
            </section>
        </main>
    );
};

export default Main;