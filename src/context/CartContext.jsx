import React, {useState, createContext} from 'react'

export const CartContext = createContext();

const CartProvider = ({children})=> {
    const [items, setItems] = useState([]);

    function addItem(item, qty) {
        if (!isInCart(item.id)) {
            setItems([...items, { ...item, qty }])
        } else {
            let aux = items;
            let itemIndex = aux.findIndex((e) => e.id === item.id);      
            aux[itemIndex].qty += qty;
            if(aux[itemIndex].qty > aux[itemIndex].stock) {
                alert("No hay más stock disponible")
                aux[itemIndex].qty = aux[itemIndex].qty - qty;
                setItems([...aux]);
            } else {
                setItems([...aux]);
            }
        }
    }

    function removeItem(itemId) {
        setItems(items.filter((e)=> e.id !== itemId))
    }

    function clear() {
        setItems([])
    }

    function isInCart(itemId) {
        return items.find((e)=> e.id === itemId)
    }

  return (
    <CartContext.Provider value={{items, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider