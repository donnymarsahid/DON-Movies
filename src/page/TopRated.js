import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import axios from 'axios';
import CardTopRated from '../cards/CardTopRated';

const TopRated = () => {
  const [movieTopRated, setMovieTopRated] = useState([]);

  const API_KEY = 'api_key=1232aba0581e79269e7da9fb05d9521e';
  const BASE_URL = 'https://api.themoviedb.org/3/';

  useEffect(() => {
    axios.get(`${BASE_URL}movie/top_rated?${API_KEY}`).then((res) => {
      setMovieTopRated(res.data.results);
    });
  }, []);
  const dataTopRated = movieTopRated.map((movie) => {
    return <CardTopRated movie={movie} key={movie.id} />;
  });
  return (
    <>
      <div class="container mt-5">
        <div class="search-mobile d-flex justify-content-end">
          <input type="text" autoComplete="off" placeholder="search movies.." />
          <div class="icon-search">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div class="section-top-rated ">
          <h3>Top Rated</h3>
          <div class="row">{dataTopRated}</div>
        </div>
      </div>
    </>
  );
};

export default TopRated;
