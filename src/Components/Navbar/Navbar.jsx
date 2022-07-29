import React from 'react'
import "./Navbar.css"
import { BsCartCheck } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
    <nav className="navbar text-white  bg-dark mb-2 pl-2">
    <a className='navbar-brand pt=4" pl-2 ml-2 href="#"'>RRecords</a>
 <ul className="nav justify-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Vinilos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">Contacto</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">Nosotros</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">FAQ</a>
  </li>
  <li>
  
  </li>
</ul>

<div className="pl-2 text-white">
  <BsCartCheck size={28}/>
</div>

</nav>

    </div>
  )
}

export default Navbar