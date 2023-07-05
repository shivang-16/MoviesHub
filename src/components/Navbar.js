import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   <>
   <nav className='navbar'>
    <div className='main-nav-box'>
     <div className="title">
      <Link to="/"><h1>Movies<span className='hub'>Hub</span></h1></Link>
     </div>
     <div className="nav-items-box">
      <Link className="nav-item-1 nav-item" to="/">Home</Link>
      <Link className="nav-item-2 nav-item" to="/movies">Movies</Link>
      <Link className="nav-item-3 nav-item" to="/tvshows">TV Shows</Link>
      <Link className="nav-item-4 nav-item" to="/series">Series</Link>
      <Link className="nav-item-5 nav-item" to="/more">More</Link>
     </div>
     </div>
   </nav>

   </>
  )
}
