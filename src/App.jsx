import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {

  const onAdd = (counter)=> {
    alert("Se agregaron " + counter + " unidades al carrito")
  }

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting='Bienvenido a mi app de React'/>
    <ItemCount stock={5} initial={0} onAdd={onAdd} />
    </>
  );
}

export default App;
