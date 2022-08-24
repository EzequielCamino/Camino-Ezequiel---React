import React,{useEffect, useState} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    let products = [{id:1, title:"Dunk SB Low Red Plum", img:"https://i.imgur.com/d2R2MWX.jpg", price: 150},
                    {id:2, title:"Jordan 1 Mid Racer Blue", img:"https://i.imgur.com/wozzbgq.jpg", price:200},
                    {id:3, title:"Dunk SB Low Navy Gum", img:"https://i.imgur.com/P4zyWq6.jpg", price:220}];
      new Promise((resolve)=>{
        setTimeout(() => {
          resolve(products)
        }, 3000);
      })
      .then((data)=>{
        setItems(data);
        console.log("promesa resuelta");
        console.log(data);
      });
  }, [])

  return (
    <>
      <div className='ItemListContainer'>
        <div className='greeting'>
          <h1>{props.greeting}</h1>
        </div>
        <div className='ItemList'>
          {items.length ?
          <ItemList items={items}/> :
          <Loading/>}
        </div>
      </div>
    </>
  )
}

export default ItemListContainer