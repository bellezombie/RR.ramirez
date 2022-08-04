import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {getPhardcoreById} from '../../../products';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

  const [detail,setDetail] =useState([])
 const {idDetail}=useParams()
    useEffect(()=>{      
      dataP()
    },[idDetail])

  const dataP=()=>{
    getPhardcoreById(idDetail).then(respuesta=>{
    setDetail(respuesta) 
    }
    )} 
  
  return (
  <>
  <ItemDetail  {...detail}/>
  </>
 );
}