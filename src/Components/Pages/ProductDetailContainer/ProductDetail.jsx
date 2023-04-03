import React from 'react'


const ProductDetail = ({product}) => {


  return (

    <div>       
       <br/>
            {product.name}
        <br/>
            {product.price}
        <br/>
        <img src={product.img} alt="" style={{width: "150 px", height: "150px"}} />

    </div>
  )
}

export default ProductDetail