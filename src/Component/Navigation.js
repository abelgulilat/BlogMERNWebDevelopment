import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <nav>
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="html">HTML</NavLink>
        <NavLink to="css">CSS</NavLink>
        <NavLink to="javascript">JAVASCRIPT</NavLink>
       </nav>
        </nav>
    </div>
  )
}

export default Navigation