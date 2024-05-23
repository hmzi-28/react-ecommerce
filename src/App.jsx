import React, {useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/header';
import Navbar from './Navbar/Navbar';
import Products from './Components/Products/Products';
import './App.css';
import Home from './Pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubCatProduc from './Components/SubCategory/SubCatProduc';
import products from '../db.js'
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <BrowserRouter>

    <Header toggleMenu={toggleMenu} products={products}/>
    <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} products={products} setMenuOpen={setMenuOpen} />

      <Routes>
        <Route path='/' element={<Home  products={products}/>} />
        <Route path='/:catName' element={<Products products={products}/>} />
        <Route path='/:catName/:subCat' element={<SubCatProduc products={products}/>} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
