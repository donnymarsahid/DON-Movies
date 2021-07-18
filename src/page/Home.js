import React, { useState, useEffect } from 'react';
import logoDSCMovies from '../assets/img/logo-dscmovies.svg';
import '../assets/css/style.css';
import axios from 'axios';
import Popular from '../cards/Popular';
import TopRated from '../cards/TopRated';
import '../assets/css/responsive.css';

const Home = () => {
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieTopRated, setMovieTopRated] = useState([]);
  useEffect(async () => {
    await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1232aba0581e79269e7da9fb05d9521e').then((res) => {
      setMoviePopular(res.data.results);
    });
    await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=1232aba0581e79269e7da9fb05d9521e').then((res) => {
      setMovieTopRated(res.data.results);
    });
  }, []);
  const dataPopular = moviePopular.map((movie) => {
    return <Popular movie={movie} key={movie.id} />;
  });
  const dataTopRated = movieTopRated.map((movie) => {
    return <TopRated movie={movie} key={movie.id} />;
  });

  return (
    <>
      <nav class="d-flex align-items-center">
        <div class="container d-flex justify-content-between  align-items-center ">
          <div class="logo">
            <img src={logoDSCMovies} alt="logo-dsc-movies" width="200" />
          </div>
          <div class="link d-flex  align-items-center">
            <ul class="d-flex justify-content-between align-items-center text-uppercase">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Popular</a>
              </li>
              <li>
                <a href="/">Top Rated</a>
              </li>
            </ul>
          </div>
          <div class="search d-flex justify-content-end">
            <input type="text" autoComplete="off" placeholder="search movies.." />
            <div class="icon-search">
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>
      </nav>
      <div class="container mt-5">
        <div class="section-popular ">
          <h3>Popular</h3>
          <div class="row">{dataPopular}</div>
        </div>
        <hr />
        <div class="container mt-5">
          <div class="section-top-rated ">
            <h3>TopRated</h3>
            <div class="row">{dataTopRated}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
