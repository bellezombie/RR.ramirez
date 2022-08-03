import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemCount/ItemListContainer';
import NavBar from './Components/Navbar/Navbar';
import ItemDetailContainer from './Components/ItemCount/ItemDetailContainer';


function App() {
  
  return (
   <>
   <BrowserRouter>
   <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer />} /> 
          <Route path='/category/:idCat' element={<ItemListContainer />} />
          <Route path='/item/:IdP' element={<ItemDetailContainer />} />
          <Route path='*' element={<p>404</p>} />
        </Routes>  

<h6>Aca vamo' a poner un Footer</h6>

   </BrowserRouter> 
   </>
  )
}

export default App
