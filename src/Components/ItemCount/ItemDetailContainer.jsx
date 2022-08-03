import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
const {idCat} = useParams()

useEffect(() => {

  let productHardcore = [
  {id: 0, name: 'Blur', image:b ,price:21100, idCat: 'Bpop'},
  {id: 1, name: 'Aphex Twin', image: bs ,price:15000, idCat: 'Atechno'},
  {id: 2, name: 'Black Sab', image:at ,price:12000, idCat: 'Hmetal'},
  {id: 3, name: 'vinilo 4', image:b ,price:10000, idCat: 'Bpop'},
  {id: 4, name: 'vinilo 5', image:bs ,price:11100, idCat: 'Bpop'},
  ];
  
  const promesaProductos = new Promise((res,rej) =>{
    setTimeout(() => {
          if(!idCat){
            res(productHardcore);
          }else {res(productHardcore.filter(productos=> productHardcore.idCat === idCat));}
         }, 2000);
   });
  
  promesaProductos.then((respuesta)=>{
  
      setProductos(respuesta);
      
   });
    
  },[productos, setProductos, idCat]); 
  return (
    <div>TERMINAR ITEMdCONT</div>
  )
}

export default ItemDetailContainer