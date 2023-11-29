import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './screens/Home';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Detail from './screens/Detail';
import NotFound from './screens/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Results from './screens/Results';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:idCategory' element={<Category />} />
          <Route path='/detail/:idProduct' element={<Detail />} />
          <Route path='/results' element={<Results />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
