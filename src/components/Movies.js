import React, { useEffect, useState } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const updateMovies = async () => {
    const url ='https://api.themoviedb.org/3/movie/top_rated?api_key=5751fdb0570f52a040bda8aa291614b9';
    let data = await fetch(url);
    let parseData = await data.json();
    setMovies(parseData.results);
  };

  useEffect(() => {
    updateMovies();
  }, []);

  return (
    <>
      <main id='main-body'>
        <h1>Top Rated Movies</h1>
        <div className='movies-page'>
        {movies.map((element) => (
          <div className="trending-card" key={element.id}>
            <div className='card-image'>
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${element.poster_path}`} alt="" />
            </div>
            <div className='movie-title'>
              {element.original_title} 
            </div>
            <p className='movie-date'>{element.release_date}</p>
          </div>
        ))}
        </div>
      </main>
    </>
  );
}
