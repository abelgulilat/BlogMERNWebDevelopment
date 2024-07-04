import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Share = () => {
  return (
    <div>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Share