import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting='Bienvenido a mi app de React'/>
    </>
  );
}

export default App;
