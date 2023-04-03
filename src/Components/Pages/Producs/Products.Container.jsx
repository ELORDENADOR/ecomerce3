import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from './Products.jsx'



const ProductsContainer = () => {

    
const [items,setItems] = useState([])

// const [newProduct,setNewProduct] = useState({
//     name: "",
//     price: "",
//     img: ""
// })

const [movimientoProducto,setMovimientoProducto] = useState(false)


useEffect(() =>{
    setMovimientoProducto(false)
    const productos = axios.get("http://localhost:5000/water")
    productos
    .then(res => setItems(res.data))
    .catch((err) => crossOriginIsolated.log(err))
},[movimientoProducto])


// const handleSubmit = (e)=>{
//  e.preventDefault()
// let data = {
//     name: newProduct.name,
//     price: Number(newProduct.price),
//     img: newProduct.img
// }

// const create = axios.post("http://localhost:5000/water", data);
// create.then((res) => console.log(res)).catch((err) => console.log(err));

 
//  setMovimientoProducto(true)
// }


// const handleChange= (e) =>{   
//     setNewProduct({...newProduct, [e.target.name]: e.target.value })
// }


const deleteProductById = (id) =>{
   axios.delete(`http://localhost:5000/water/${id}`)
   setMovimientoProducto(true)
}

const updateProductById = (id) =>{
    axios.patch(`http://localhost:5000/water/${id}`,{price: 600, name:"Actualizado"})
    setMovimientoProducto(true)
}


  return (
<div>

 
  
<Products 
    updateProductById = {updateProductById}
    deleteProductById = {deleteProductById}   
    items = {items}    
     // handleChange = {handleChange}
    // handleSubmit = {handleSubmit}
    />
    

</div>

   
  )
}



export default ProductsContainer