import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import AppContextProvider from './components/AppContextProvider';
import ConfirmedBooking from './components/ConfirmedBooking';

import './styles/common.scss';

function App() {

  return (
    <AppContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/reservations" element={<Reservations />} />
          <Route exact path="/orderOnline" element={<OrderOnline />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/bookingPage" element={<BookingPage />} />
          <Route exact path="/confirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </Router>
    </AppContextProvider>
    
  );
}

export default App;
