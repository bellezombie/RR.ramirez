import React, { useEffect, useState } from 'react'

export default function Test() {

function handleOnKeyDown(e){
console.log('e')
        
    }  
    
function hanldeResize(e){
    alert('en 1000 no anda')
        console.log('e')
                
            }  
            
            
 useEffect(() =>{
window.addEventListener('resize', hanldeResize);
return ()=> {
    window.removeEventListener('resize', hanldeResize);

   }

 },[]);
    
return (
  <>

 <br /> <input onKeyDown={handleOnKeyDown} />  <br /> <br />
  
  </>
);
}
