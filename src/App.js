import './App.css';
import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import { Container } from 'react-bootstrap';
import Main from './Main';
import Confirmation from './Pages/Contact/Confirmation/confirmation';
import NavbarContact from './Pages/Contact Navbar';
import Menu from './Navbar';


function App() {
  return (
    <div className="App">
      <Container>
        <Banner />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} Component={Menu} />
            <Route path="contact" element={<Contact />} Component={NavbarContact} />
          </Routes>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="contact" element={<Contact />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
