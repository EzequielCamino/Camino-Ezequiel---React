import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items})=> {
    return (
        <>
            {items.map((item, index)=>
                <div key={index}>
                    <Item id={item.id} img={item.img} title={item.title} price={item.price}/>
                </div>
            )}
        </>
    );
}

export default ItemList