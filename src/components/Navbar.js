import React from 'react'

export default function Navbar(props) {
  return (
   <>
   <nav className='navbar'>
    <div className='main-nav-box'>
     <div className="title">
      <h1>Movies<span className='hub'>Hub</span></h1>
     </div>
     <div className="nav-items-box">
     <div className="nav-item-1 nav-item">Home</div>
      <div className="nav-item-2 nav-item">Movies</div>
      <div className="nav-item-3 nav-item">TV Shows</div>
      <div className="nav-item-4 nav-item">Series</div>
      <div className="nav-item-5 nav-item">More</div>
     </div>
     </div>
   </nav>

   </>
  )
}
