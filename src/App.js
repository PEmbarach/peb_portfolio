import './App.css';
import Banner from './Banner';
import Footer from './Footer';
import Projects from './Projects';
import Skills from './Skills';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <Banner />
      <Skills />
      <Projects />
      <Footer />
      <BrowserRouter>
        <Routes>
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
