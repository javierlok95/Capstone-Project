import './App.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Reservations from './components/Reservations';
import { Routes, Route, } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <div className="header-nav-container">
      <Header />
      <Nav />
    </div>
  );
};

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

