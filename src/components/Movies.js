import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';

export default function Movies() {
  // const [movies, setMovies] = useState(null);

  // const update = async () => {
  //   const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=5751fdb0570f52a040bda8aa291614b9&page=2";
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   setMovies(parseData.results);
  // }

  // useEffect(() => {
  //   update();
  // }, []);

  return (
    <>
      {/* <h1 className='text-center text-light'>Top Rated Movies</h1>
      <div className='container'>
        <div className="row">
          {movies ? (
            movies.map((element) => (
              <div className="col-md-4" key={element.id}>
                <MovieItem
                  title={element.original_title ? element.original_title : ""}
                  overview={element.overview ? element.overview : ""}
                  image={`https://image.tmdb.org/t/p/w220_and_h330_face${element.poster_path}`}
                />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div> */}
    </>
  )
}
