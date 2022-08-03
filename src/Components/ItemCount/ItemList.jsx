import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {

  return (
    <>
      {  productos.map((productos) => (
        <Item key={productos.id} producto={productos} /*onAdd={onAdd}*/ />
                                      ))
     }
    </>
  );
}