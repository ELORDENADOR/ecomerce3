import React from 'react'



const CreateProduct = ({handleSubmit,handleChange}) => {
  return (
    <div>
         <form onSubmit={handleSubmit}>
        <input
        name="name"
        placeholder='nombre del producto'
        onChange={handleChange}
        />
       <input
        name="price"
        placeholder='precio'
        onChange={handleChange}
        />
          <input
        name="img"
        placeholder='url de la imagen'
        onChange={handleChange}        
        />  
     
        <button>Crear</button>

     
        </form>
    </div>
  )
}

export default CreateProduct