import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'



const NavbarLayout = () => {
  return (
    <div>
      <NavLink to="/login" className={({isActive}) => isActive ? "activeNavbar" : "navbar"} > Login  </NavLink>
      <NavLink to="/shop" className={({isActive}) => isActive ? "activeNavbar" : "navbar"} > Tienda</NavLink>
      <NavLink to="/cart" className={({isActive}) => isActive ? "activeNavbar" : "navbar"} >Carrito</NavLink>
      
        <Outlet/>
     
    </div>
  )
}

export default NavbarLayout