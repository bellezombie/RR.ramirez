import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import b from './b.jpg';
import bs from './bs.jpg';
import at from './at.jpg';


export default function ItemListContainer(){

const[productos, setProductos] = useState([]);
const {idCat} = useParams();

console.log(idCat)

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

  return <ItemList productos={productos}/>;
}
