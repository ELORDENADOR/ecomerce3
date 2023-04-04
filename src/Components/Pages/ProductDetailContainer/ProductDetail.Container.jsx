import ProductDetail from './ProductDetail'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getproductById, updateProduct } from '../../../Services/productServices'




const ProductDetailContainer = () => {

    const [product,setProduct] = useState({})
    const [showForm,setShowForm]= useState(false)

const [producSelected,setProducSelected] = useState({
  name:  product?.name
})

const [isUpdate,setIsUpdate] = useState(false)


    const {id} = useParams()

 


useEffect(() =>{
  setIsUpdate(false)
  let producto =  getproductById(id)
  producto.then(res => setProduct(res.data))
},[isUpdate])


const handleSubmit = (e) =>{
  e.preventDefault()
  updateProduct(id,producSelected)
  setIsUpdate(true)
}




  return (
    <div>
        <ProductDetail
        product = {product}
        showForm = {showForm}
        setShowForm = {setShowForm}
        handleSubmit = {handleSubmit}
        producSelected = {producSelected}
        setProducSelected = {setProducSelected}
        />
    </div>
  )
}

export default ProductDetailContainer