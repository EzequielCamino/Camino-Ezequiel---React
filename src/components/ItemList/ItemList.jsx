import React from 'react';
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';

const ItemList = ({items})=> {
    const onAdd = (counter, title)=> {
        alert("Se agregaron " + counter + " unidades al carrito de " + title)
    }
    return (
        <>
            {items.map((item, index)=>
                <div key={index}>
                    <Item id={item.id} img={item.img} title={item.title} price={item.price}/>
                    <ItemCount stock={5} initial={0} onAdd={onAdd} title={item.title} />
                </div>
            )}
        </>
    );
}

export default ItemList