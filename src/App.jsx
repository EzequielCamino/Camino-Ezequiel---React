import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyAppNavbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <MyAppNavbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenido a mi app de React'/>} />
          <Route path="/category/:categoryid" element={<ItemListContainer greeting='Bienvenido a mi app de React'/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;