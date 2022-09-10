import React, { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import "./ItemDetailContainer.scss"

function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [loadComplete, setLoadComplete] = useState(false);

    useEffect(()=> {
    new Promise((resolve)=>{
      setTimeout(() => {
        fetch("../products.json")
        .then(response => response.json())
        .then(data => {
          let products = data.products
          console.log("Promesa completa");
            resolve(products.find((el)=> el.id == id))
          })
        }, 3000);
      })
      .then(data => {
        setItem(data);
        console.log("promesa resuelta");
        console.log(data);
        setLoadComplete(true);
    });
  }, [id])

  return (
    <div className='item'>
        {loadComplete ?
        <ItemDetail item={item}/> :
        <Loading/>}
    </div>
  )
}

export default ItemDetailContainer