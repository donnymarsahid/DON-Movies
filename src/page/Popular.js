import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import CardPopular from '../cards/CardPopular';
import axios from 'axios';

const Popular = () => {
  const [moviePopular, setMoviePopular] = useState([]);

  const API_KEY = 'api_key=1232aba0581e79269e7da9fb05d9521e';
  const BASE_URL = 'https://api.themoviedb.org/3/';

  useEffect(() => {
    axios.get(`${BASE_URL}movie/popular?${API_KEY}`).then((res) => {
      setMoviePopular(res.data.results);
    });
  }, []);
  const dataPopular = moviePopular.map((movie) => {
    return <CardPopular movie={movie} key={movie.id} />;
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
        <div class="section-popular ">
          <h3>Popular</h3>
          <div class="row">{dataPopular}</div>
        </div>
      </div>
    </>
  );
};

export default Popular;
