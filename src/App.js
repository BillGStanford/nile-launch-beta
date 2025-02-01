import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookDetails from './pages/BookDetails';
import About from './pages/About';
import PartnerWithUs from './pages/PartnerWithUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:slug" element={<BookDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/partner" element={<PartnerWithUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;