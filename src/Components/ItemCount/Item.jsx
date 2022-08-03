import React from 'react'


export default function Item({ producto }) {

    const { name, image, price} = producto;

    return (
    <>
<div className="link">
      
        <div className="counter link__item" style={{ width: "15rem" }}>
          <div className="counter__content">
            <h5 className="card-title">{name}</h5>
            <img
              src={image}
              className="card-img-top"
              alt="Imagen del Producto"
            />
            <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            <h6>${price}</h6>
          </div>
        </div>
      
    </div> 
      <div style={{ border: "1px solid black", margin: "10px" }}>
        {JSON.stringify(producto)}
      </div>

    </>

    );
  }