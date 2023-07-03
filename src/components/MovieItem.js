import React from 'react'


export default function MovieItem(props) {
    
  return (
    <>
    
    <div className='container my-5'>
   <div className="card col-md-4 bg-dark text-light" style={{width: '300px'}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title }</h5>
    <p className="card-text">{props.overview}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  
</div>

    </>
  )
}
