import React, { useEffect, useState } from 'react';

export default function Movies(props) {
  const [movies, setMovies] = useState([]);

  const updateMovies = async () => {
    props.setProgress(10);
    const url ='https://api.themoviedb.org/3/movie/top_rated?api_key=5751fdb0570f52a040bda8aa291614b9';
    props.setProgress(40);
    let data = await fetch(url);
    props.setProgress(70);
    let parseData = await data.json();
    setMovies(parseData.results);
    props.setProgress(100);
  };

  useEffect(() => {
    updateMovies();
  }, []);

  return (
    <>
      <main id='main-body'>
        <h1>Top Rated Movies</h1>
        <div className='movies-page'>
        {movies.map((element)=>{
       return <a href={`https://www.themoviedb.org/movie/${element.id}`} key={element.id}>
        <div className="moive-card">
          <div className='card-image'>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${element.poster_path}`} alt="" />
            </div>
            <div className='movie-title'>
          {element.original_title} 
            </div>
          <p className='movie-date'>{element.release_date}</p>
          <p className='movie-date'>{element.overview}</p>
        </div>
       </a>
    })}
        </div>
      </main>
    </>
  );
}
