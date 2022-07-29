import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import b from "..Card/b.jpg"
import bs from '..Card/bs.jpg'
import at from '..Card/at.jpg'

export default function ItemListContainer(){
const[produtos, setProductos] = useState([]);

useEffect(() => {

let productHardcore = [
{id: 0, name: "Blur", image:b ,price:21100},
{id: 1, name: "Aphex Twin", image: bs ,price:15000},
{id: 2, name: "Black Saba", image:at ,price:12000},
{id: 3, name: "vinilo 4", image:b ,price:10000},
{id: 4, name: "vinilo 5", image:bs ,price:11100}];

const promesaProductos = new Promise((res,rej) =>{
        res(productHardcore);
        setTimeout(() => {  }, 2000);
 });

promesaProductos.then((PTotal)=>{

    setProductos(PTotal);
 });
  
},[]); 

  return <ItemList  produtos={produtos}/>;
}
