import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import Home from './pages/Home';
import Profile from './pages/Customer/Profile';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
