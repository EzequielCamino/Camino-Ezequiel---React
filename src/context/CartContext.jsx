import React, {useState, createContext} from 'react'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

export const CartContext = createContext();

const CartProvider = ({ children })=> {
    const [items, setItems] = useState([]);

    function addItem(item, qty) {
        if (!isInCart(item.id)) {
            setItems([...items, { ...item, qty }])
            successStock(item, qty);
            setLocalStorage([...items, { ...item, qty }]);
        } else {
            let aux = items;
            let itemIndex = aux.findIndex((e) => e.id === item.id);      
            aux[itemIndex].qty += qty;
            if(aux[itemIndex].qty > aux[itemIndex].stock) {
                noStock();
                aux[itemIndex].qty = aux[itemIndex].qty - qty;
                setItems([...aux]);
            } else {
                setItems([...aux]);
                successStock(item, qty);
                setLocalStorage([...aux]);
            }
        }
    }

    function noStock() {
        toast.error('No hay más stock disponible', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            });
    }

    function successStock(item, qty) {
        toast.success(`Se agregaron ${qty} unidades al carrito de ${item.title}!`, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            });
    }

    function setLocalStorage(items) {
        localStorage.setItem('items', JSON.stringify(items));
    }

    function removeItem(itemId) {
        setItems(items.filter((e)=> e.id !== itemId))
    }

    function clear() {
        setItems([])
        localStorage.setItem('items', "");
    }

    function isInCart(itemId) {
        return items.find((e)=> e.id === itemId)
    }

    function restoreCart() {
        localStorage.getItem('items') !== "" ? 
        setItems(JSON.parse(localStorage.getItem('items')))
        : Swal.fire(
            '¡Carrito no restaurado!',
            'El carrito de la sesión anterior está vacío o la orden ya fue generada',
            'error'
        )
    }

  return (
    <CartContext.Provider value={{items, addItem, removeItem, clear, restoreCart, noStock}}>
        {children}
        <ToastContainer/>
    </CartContext.Provider>
  )
}

export default CartProvider