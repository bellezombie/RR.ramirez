import React, { useEffect, useState } from 'react'


const ItemCount = ({stock, add}) => {

  const [items, setItems] = useState(0)

   function resT () {   if (items<stock){  setItems(items-1); }    }
   function sumA () {   if (items>stock){  setItems(items+1); }    }
   
   
  return (

  <>
    <div>
      <button disabled={stock === 0} onClick={resT} className="btn btn-outline-secondary border-0"  > - </button> 
      {items}
      <button disabled={setItems === stock} onClick={sumA} className="btn btn-outline-secondary border-0" > + </button>
    </div>
    <div>
      <button disabled={setItems === stock} onClick={() => add(items)} className="btn btn-outline-secondary border-0"  > Agregar al carrito </button>
    </div>
    
  </>

  );
}
export default ItemCount;