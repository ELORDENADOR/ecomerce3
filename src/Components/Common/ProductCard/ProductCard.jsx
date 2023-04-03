import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({elemento,updateProductById,deleteProductById}) => {
  return (
    <div>
           <div style={{border: "solid 2px"}}>
             <br/>
                {elemento.name}
             <br/>
                {elemento.price}
              <br/>
                <img src={elemento.img} alt="" style={{width: "150 px", height: "150px"}} />

                <button onClick={() => deleteProductById(elemento.id)} >delete</button>
                <button onClick={() => updateProductById(elemento.id)} >Actualizar</button>
             
            <Link to={`/productDetail/${elemento.id}`}>
            <button>Ver detalle</button>
            </Link>
      
         </div>
    </div>
  )
}

export default ProductCard