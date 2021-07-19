import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import axios from 'axios';
import CardMovie from '../cards/CardMovie';
import logoDSCMovies from '../assets/img/logo-dscmovies.svg';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Home = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?';
  const API_KEY = 'api_key=1232aba0581e79269e7da9fb05d9521e';
  const SEARCH_TERM = `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=`;

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`).then((res) => {
      setDataMovie(res.data.results);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${SEARCH_TERM}${searchTerm}`).then((res) => {
      setDataMovie(res.data.results);
      if (res.data.results < 1) {
        $('.results').html('movie not found');
      }
    });
    if (searchTerm.length === 0) {
      axios.get(`${BASE_URL}${API_KEY}`).then((res) => {
        setDataMovie(res.data.results);
        $('.results').html('');
      });
    } else {
      $('.results').html('Search Results : ' + searchTerm);
    }
    setSearchTerm('');
  };

  const cardDataMovie = dataMovie.map((movie) => {
    return <CardMovie movie={movie} key={movie.id} />;
  });

  return (
    <>
      {/* Navbar Start */}
      <nav class="d-flex align-items-center">
        <div class="container d-flex justify-content-between  align-items-center ">
          <div class="logo">
            <a href="/">
              <img src={logoDSCMovies} alt="logo-dsc-movies" width="200" />
            </a>
          </div>
          <div class="link d-flex  align-items-center">
            <ul class="d-flex justify-content-between align-items-center text-uppercase">
              <li>
                <Link to="/upcoming">Up Coming</Link>
              </li>
              <li>
                <Link to="/popular">Popular</Link>
              </li>
              <li>
                <Link to="/toprated">Top Rated</Link>
              </li>
            </ul>
          </div>
          <div class="search d-flex justify-content-end">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                autoComplete="off"
                placeholder="search movies.."
                name="search"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </form>
            <div class="icon-search">
              <i class="fas fa-search" onClick={handleSubmit}></i>
            </div>
          </div>
          <div class="hamburger-menu">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div class="offcanvas-header">
            <img src={logoDSCMovies} alt="logo-dscmovies" />
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <a href="/">Popular</a>
            <br />
            <br />
            <a href="/">Top Rated</a>
            <br />
            <br />
            <a href="/">Up Coming</a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
      <div class="container mt-5">
        <h3 class="results"> </h3>
        <div class="search-mobile d-flex justify-content-end">
          <input type="text" autoComplete="off" placeholder="search movies.." />
          <div class="icon-search">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div class="row">{cardDataMovie}</div>
      </div>
    </>
  );
};

export default Home;
