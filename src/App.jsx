import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductsContainer from './Components/Pages/Products/Products.Container'
import Home from './Components/Pages/Home/Home'
// import CreateProduct from './Components/Pages/CreateProduct/CreateProduct'
import NavbarLayout from './Components/Layout/NavbarLayout/NavbarLayout'
import FooterLayout from './Components/Layout/FooterLayout/FooterLayout'
// import CreateProduct from './Components/Pages/CreateProduct/CreateProduct.Container'
import CreateProductContainer from './Components/Pages/CreateProduct/CreateProduct.Container'
import ProductDetailContainer from './Components/Pages/ProductDetailContainer/ProductDetail.Container'



function App() {
  return (
   <BrowserRouter>
      <Routes>     

  <Route  path="/login" element={<h2>Estoy en la vista Login</h2>}/>

        <Route element={ <NavbarLayout/> } >
          <Route  path="/" element={ <Home/>  }/>  

      <Route element={ <FooterLayout/> }>
         <Route  path="/cart" element={<h2>Cart</h2>}/>
          <Route  path="/shop" element={ <ProductsContainer/> }/>
          <Route  path="/create-product" element={ <CreateProductContainer/> }/>
          <Route  path="/productDetail/:id" element={ <ProductDetailContainer/> }/>
      </Route>
     
        </Route>

          <Route  path="*" element={ <h2>Not found</h2>} />

      </Routes>   
   </BrowserRouter>
  )
}

export default App
