
import React, { useEffect, useState } from 'react'
import { deleteProduct, getproducts, updateProduct } from '../../../Services/productServices.js'
import Products from './Products.jsx'



const ProductsContainer = () => {

    
const [items,setItems] = useState([])


const [movimientoProducto,setMovimientoProducto] = useState(false)


useEffect(() =>{
    setMovimientoProducto(false)
    const productos = getproducts()
    productos
    .then(res => setItems(res.data))
    .catch((err) => crossOriginIsolated.log(err))
},[movimientoProducto])



const deleteProductById = (id) =>{
   deleteProduct(id)
   setMovimientoProducto(true)
}

const updateProductById = (id) =>{
    updateProduct(id,{
      price: 700, 
      name:"Actualizadicimo"
    })
    setMovimientoProducto(true)
}


  return (
<div>

 
  
<Products 
    updateProductById = {updateProductById}
    deleteProductById = {deleteProductById}   
    items = {items}        
  />
    

</div>

   
  )
}



export default ProductsContainer