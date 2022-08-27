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
        let products = [{id:1, title:"Dunk SB Low Red Plum", img:"https://i.imgur.com/d2R2MWX.jpg", price: 150, info:'Este modelo LOW PRO "ACG Terra Red Plum", con su combinación de colores llamativos inspirados en el outdoorism y el upper de piel y gamuza suave, saben cómo hacerte destacar en la tabla. La unidad Zoom Air en el talón y la lengüeta acolchada te aportan todo el confort que necesitás. La suela de goma con patrón circular es flexible y resistente, y te asegura además un agarre multidireccional, ideal para practicar tus tricks más atrevidos.'},
                        {id:2, title:"Jordan 1 Mid Racer Blue", img:"https://i.imgur.com/wozzbgq.jpg", price:200 , info:"Originalmente hechos para que Michael Jordan jugara básquetbol en la NBA, los AJ1 se convirtieron en parte de la moda urbana. Su construcción de cuero le brinda una mayor durabilidad y resistencia. Los orificios frontales los hacen frescos y el cuello alto protegerá tus tobillos en todo momento. Podrás ajustarlos sencillamente en tus pies gracias a sus agujetas y lengüeta. La suela está hecha de goma, tiene un patrón grabado en el exterior y la Unidad Air Sole. Esto en conjunto te brinda pisadas suaves y una gran tracción en la superficie."},
                        {id:3, title:"Dunk SB Low Navy Gum", img:"https://i.imgur.com/P4zyWq6.jpg", price:220, info:"Como parte de la serie Orange Label exclusiva de Nike SB, las Dunk Low Pro ISO están listas para salir a las calles en una iteración de azul marino, negro y caramelo. La capellada construida en gamuza azul marino resistente se asienta sobre el midsole blanco y una suela color goma contrastante. Un Swoosh de cuero negro completa el look simple pero efectivo."}];
    new Promise((resolve)=>{
        setTimeout(() => {
          resolve(products.find((el)=> el.id == id))
        }, 3000);
      })
      .then((data)=>{
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