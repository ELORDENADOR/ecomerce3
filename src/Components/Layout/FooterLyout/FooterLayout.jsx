import React from 'react'
import { Outlet } from 'react-router-dom'

const FooterLayout = () => {
  return (

    <div>
      <Outlet/>
       <div>Este es el footer</div>
    </div>
   
  )
}

export default FooterLayout