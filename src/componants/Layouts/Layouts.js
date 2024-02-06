import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export default function Layouts () {
  return (
    <div>
      <div className="container mx-auto text-center">
          <Header />
      </div>  
        <Outlet />
      
    </div>
   
  )
}
