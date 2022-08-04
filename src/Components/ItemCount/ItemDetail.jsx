import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

export default function ItemDetail(price, name, image, stock) {
  
  const [total, setTotal] = useState(0)
  const Ctotal = (item) => {
      setTotal({item,name,price})
      console.log(item)
  }
 
  return (
         <>
    <div className=' flex justify-center  text-center'>
    <div className="counter link__item flex-col w-3/4" style={{ width: "30rem" }}>
    <div className="counter__content ">
  <h5 className="card-title">{name}</h5>
  <img src={image} className="card-img-top" alt="Imagen del Producto"/>
  <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
  <h6>${price}</h6>
  {total === 0  || total.item===0 ? <ItemCount add={total} stock={stock}/> :<> <p className="mt-2 text-cyan-100 bg-blue-500 text-xl px-2.5 py-1.5 text-center">Tiene en el carrito  {total.item} {total.name} en total</p> {/* <Link to='/Cart' className="mt-2 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Terminar Compra</Link> */}</>}
           
</div>
</div>
</div>
    </>
  )
}




