import React, { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import "./ItemDetailContainer.scss"
import db from '../../services';
import { collection, getDocs } from 'firebase/firestore'

function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [loadComplete, setLoadComplete] = useState(false);

  useEffect(()=> {

    const getProducts = async() =>{
      try {
      const itemsCollection =  collection(db, "products");
      const col = await getDocs(itemsCollection);
      const products = col.docs.map((doc)=> doc = { id:doc.id, ...doc.data()});
      setItem(products.find((el)=> el.id === id))
      setLoadComplete(true);
      } catch (error) {
        console.log(error);
      }
    }
    
    getProducts();

    return()=> {

    }

  }, [id]);

  return (
    <div className='item'>
        {loadComplete ?
        <ItemDetail item={item}/> :
        <Loading/>}
    </div>
  )
}

export default ItemDetailContainer