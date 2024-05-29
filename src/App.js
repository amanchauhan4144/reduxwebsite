import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import Header from './components/Headers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
    </div>
  );
};

export default App;
