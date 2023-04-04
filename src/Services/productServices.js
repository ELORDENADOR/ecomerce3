import axios from "axios"
import { productInstance } from "./productInstance"



export const  getproducts = () =>{
    return   productInstance.get()   
}

export const  getproductById = (id) =>{
   return   productInstance.get(`http://localhost:5000/water/${id}`)   
}

export const deleteProduct = (id) =>{
   return  productInstance.delete(`/${id}`)
}

export const updateProduct = (id,data) =>{
   return  productInstance.patch(`/${id}`,data)
}

export const createProduct = (data) =>{
  return  productInstance.post("/", data);
}