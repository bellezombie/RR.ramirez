import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {getPhardcore, getPhardcoreByCat} from '../../../products';
import { Form } from 'react-bootstrap';


export default function ItemListContainer(){

const[productos, setProductos] = useState([]);
const {idCat} = useParams();

console.log(idCat)

useEffect(() => {

const promesaProductos = new Promise((res,rej) =>{
  setTimeout(() => {
        if(!idCat){
          res(getPhardcore());
        }else {res(getPhardcore().filter(productos=> getPhardcore().idCaT === idCat));}
       }, 2000);
 });

promesaProductos.then((respuesta)=>{

    setProductos(respuesta);
    
 });
 

  
},[productos, setProductos, idCat]); 

  return <ItemList productos={productos}/>;
}
