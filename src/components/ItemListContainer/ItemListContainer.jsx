import React,{useEffect, useState} from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const {categoryid} =useParams();
  const [loadComplete, setLoadComplete] = useState(false);

  useEffect(()=>{
    let products = [{id:1, category:"Nike", title:"Dunk SB Low Red Plum", img:"https://i.imgur.com/d2R2MWX.jpg", price: 150},
                    {id:2, category:"Jordan", title:"Jordan 1 Mid Racer Blue", img:"https://i.imgur.com/wozzbgq.jpg", price:200},
                    {id:3, category:"Nike", title:"Dunk SB Low Navy Gum", img:"https://i.imgur.com/P4zyWq6.jpg", price:220}];
      new Promise((resolve)=>{
        let productsFiltered = [];
        setLoadComplete(false);
        setTimeout(() => {
          productsFiltered =  categoryid ?
                              products.filter((e)=> e.category == categoryid)
                              : products;
          resolve(productsFiltered);
        }, 3000);
      })
      .then((data)=>{
        setItems(data);
        console.log("promesa resuelta");
        console.log(data);
        setLoadComplete(true);
      });
  }, [categoryid])

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