import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {

  return (
    <div className=' grid  md:grid-cols-3 flex'>
    { productos.map((productos) => (
        <Item key={productos.id} producto={productos} /*onAdd={onAdd}*/ />
        ))
     }
    </div>
  );
}