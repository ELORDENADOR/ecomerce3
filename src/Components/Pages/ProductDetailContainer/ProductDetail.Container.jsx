import ProductDetail from './ProductDetail'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ProductDetailContainer = () => {

    const [product,setProduct] = useState({})

    const {id} = useParams()

useEffect(() =>{
   axios.get(`http://localhost:5000/water/${id}`)
   .then(res => setProduct(res.data))
},[])


  return (
    <div>
        <ProductDetail
        product = {product}
        />
    </div>
  )
}

export default ProductDetailContainer