import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <div className='flex justify-center gap-4'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
