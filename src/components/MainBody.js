import React, {useEffect, useState} from 'react'

export default function MainBody() {
    const [trending, setTrending] = useState([]);
    const [videos, setVideos] = useState([]);
    const [popular, setPopular] = useState([])

  const updateTrending = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=5751fdb0570f52a040bda8aa291614b9";
    let data = await fetch(url);
    let parseData = await data.json();
    setTrending(parseData.results);
  }
  const updateVideos = async () => {
    const url = "https://api.themoviedb.org/3/movie/335977/videos?api_key=5751fdb0570f52a040bda8aa291614b9";
    let data = await fetch(url);
    let parseData = await data.json();
    setVideos(parseData.results);
  }
  const updatePopular = async () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=5751fdb0570f52a040bda8aa291614b9";
    let data = await fetch(url);
    let parseData = await data.json();
    setPopular(parseData.results);
  }
  useEffect(() => {
    updateTrending();
    updateVideos();
    updatePopular();
  }, []);

  return (
<>
<main id='main-body'>
  <div className='top-header'>
    <div className='heading'>
        <h1>Welcome.</h1>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
    </div>
    <div className='search-box'>
      <form>
      <input type="search" className='search-bar' placeholder='Search...' />
       <input type="submit" className='submit-btn' value='Search'/>
      </form>
    </div>
  </div>
  <div className='movies-card-box trending'>
    <div className='trending-header common-header'>
      <h2>Trending</h2>
      <div className='trending-btn'>
        <div className="btn1 tr-btn active">
        <span>Today</span>
        </div>
        <div className="btn2 tr-btn">
          <span> This Week</span>
        </div>
      </div>
    </div>
    <div className="trending-content">
    {trending.map((element)=>{
       return <div className="trending-card">
          <div className='card-image'>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${element.poster_path}`} alt="" />
            </div>
            <div className='movie-title'>
          {element.original_title} 
            </div>
          <p className='movie-date'>{element.release_date}</p>
        </div>
    })}
    </div>
  </div>
   <div className='videos'>
      <div className="videos-header common-header">
        <h2>Moives Previews</h2>
      </div>
      <div className="videos-content">
        {videos.map((element)=>{
           return <div className="videos-card">
           <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${element.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
        })}
      </div>
   </div>
   <div className='popular'>
   <div className='common-header'>
      <h2>Watch Popular</h2>
      <div className='trending-btn'>
        <div className="btn1 tr-btn active">
        <span>Movie</span>
        </div>
        <div className="btn2 tr-btn">
          <span>TV Series</span>
        </div>
      </div>
    </div>
    <div className='trending-content'>
    {popular.map((element)=>{
       return <div className="trending-card">
          <div className='card-image'>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${element.poster_path}`} alt="" />
            </div>
            <div className='movie-title'>
          {element.original_title} 
            </div>
          <p className='movie-date'>{element.release_date}</p>
        </div>
    })}
    </div>
   </div>
</main>
</>
  )
}
