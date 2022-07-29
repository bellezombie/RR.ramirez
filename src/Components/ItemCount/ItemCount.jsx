import React, { useEffect, useState } from 'react'


const ItemCount = ({}) => {

  const [items, setItems] = useState(0)

   function resT () {     setItems(items-1)    }
   function sumA () {     setItems(items+1)    }
   
   
  return (

  <>
    <div>
      <button disabled={items === 0} onClick={resT} className="btn btn-outline-secondary border-0"  > - </button> 
      {items}
      <button disabled={items === 7} onClick={sumA} className="btn btn-outline-secondary border-0" > + </button>
    </div>
    <div>
      <button disabled={items === 7} onClick={sumA} className="btn btn-outline-secondary border-0"  > Agregar al carrito </button>
    </div>
    
  </>

  );

}

export default ItemCount;