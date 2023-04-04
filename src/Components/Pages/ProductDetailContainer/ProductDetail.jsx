
const ProductDetail = ({product,showForm,setShowForm,handleSubmit,producSelected,setProducSelected}) => {



  return (

    <div>       
       <br/>
            {product.name}
        <br/>
            {product.price}
        <br/>
        <img src={product.img} alt="" style={{width: "150 px", height: "150px"}} />

  <button  onClick={() =>setShowForm(true) }>Editar</button>

{
showForm && (

  <form onSubmit={handleSubmit} >
  <input
   type="text"
   defaultValue={product.name}
   onChange={(e) => setProducSelected({...producSelected, name: e.target.value} )}
  />
  <button type="submit">Guardar Cambios</button>
</form>

)

 
}





   
    </div>
  )
}

export default ProductDetail