import './App.css';
import Banner from './Banner';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import { Container } from 'react-bootstrap';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <Banner />
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
