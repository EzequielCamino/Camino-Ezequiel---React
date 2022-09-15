import React,{useEffect, useState} from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import db from '../../services';
import { collection, getDocs } from 'firebase/firestore'

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const {categoryid} = useParams();
  const [loadComplete, setLoadComplete] = useState(false);

/*   useEffect(()=>{
      new Promise((resolve)=>{
        let productsFiltered = [];
        setTimeout(() => {
          fetch("products.json")
          .then(response => response.json())
          .then(data => {
            let products = data.products
            console.log("Promesa completa");
            productsFiltered =  categoryid ?
            products.filter((e)=> e.category === categoryid)
            : products;
            resolve(productsFiltered);
          })
        }, 3000);
      })
      .then((data)=>{
        setItems(data);
        console.log("promesa resuelta");
        console.log(data);
        setLoadComplete(true);
      });
  }, [categoryid]) */

  useEffect(()=> {

    const getProducts = async() =>{
      try {
      let productsFiltered = [];
      const itemsCollection =  collection(db, "products");
      const col = await getDocs(itemsCollection);
      const products = col.docs.map((doc)=> doc = { id:doc.id, ...doc.data()});
      productsFiltered =  categoryid ?
                          products.filter((e)=> e.category === categoryid)
                          : products;
      setItems(productsFiltered)
      setLoadComplete(true);
      } catch (error) {
        console.log(error);
      }
    }
    
    getProducts();

    return()=> {

    }

  }, [categoryid]);

  return (
    <>
      <div className='itemListContainer'>
        <div className='greeting'>
          <h1>{props.greeting}</h1>
        </div>
        <div className='itemList'>
          {loadComplete ?
          <ItemList items={items}/> :
          <Loading/>}
        </div>
      </div>
    </>
  )
}

export default ItemListContainer