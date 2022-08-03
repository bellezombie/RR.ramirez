import React, {useState} from 'react';
//import styled from 'styled-components';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    const [links, setLinks] = useState([
        {N: 'RRecords', url: '/'}, 
        {N: 'Nosotros', url: '/'}, 
        {N: 'Vinilos', url: '/category/:idCat'}, 
        {N: 'Genero', url: '/item/:IdP'}
      ])
    
    return(
        <header >
            <nav >
                <NavLink to='/' >
                    {/* <img src={logo} alt={"logo"}/> no te olvides de agregar*/}
                </NavLink>
                <ul >
                    {links.map((link, i) => {
                    return (<li key={i}><NavLink to={link.url}>{link.N}</NavLink></li>)
                    })}
                    <CartWidget />
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;