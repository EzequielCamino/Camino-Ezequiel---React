import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyAppNavbar from './components/Navbar/Navbar';
import MyAppFooter from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <MyAppNavbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenido a GoldenLoot®'/>} />
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path="/category/:categoryid" element={<ItemListContainer greeting='Bienvenido a GoldenLoot®'/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <MyAppFooter/>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;