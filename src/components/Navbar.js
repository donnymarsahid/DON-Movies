import React, { Component } from 'react';
import logoDSCMovies from '../assets/img/logo-dscmovies.svg';
import axios from 'axios';

const SEARCH_TERM = `https://api.themoviedb.org/3/search/movie?api_key=1232aba0581e79269e7da9fb05d9521e&query=`;

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      value: '',
    };
  }

  update = async (e) => {
    e.preventDefault();
    axios.get(`${SEARCH_TERM}${this.state.value}`).then((res) => {
      this.props.updateMovie(res.data.results, `search results : ${this.state.value}`);
      this.props.updateMoviePopular(res.data.results, `search results : ${this.state.value}`);
      this.props.updateMovieTopRated(res.data.results, `search results : ${this.state.value}`);
      this.props.updateMovieUpComing(res.data.results, `search results : ${this.state.value}`);
    });
  };

  render() {
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
                  <a href="/upcoming">Up Coming</a>
                </li>
                <li>
                  <a href="/popular">Popular</a>
                </li>
                <li>
                  <a href="/toprated">Top Rated</a>
                </li>
              </ul>
            </div>
            <div class="search d-flex justify-content-end">
              <form onSubmit={this.update}>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="search movies.."
                  name="search"
                  onChange={(e) => {
                    this.setState({
                      value: e.target.value,
                    });
                  }}
                />
              </form>
              <div class="icon-search">
                <i class="fas fa-search" onClick={this.update}></i>
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
              <a href="/popular">Popular</a>
              <br />
              <br />
              <a href="/toprated">Top Rated</a>
              <br />
              <br />
              <a href="/upcoming">Up Coming</a>
              <br />
              <br />
              <div class="search-mobile d-flex justify-content-end">
                <form onSubmit={this.update}>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="search movies.."
                    name="search"
                    onChange={(e) => {
                      this.setState({
                        value: e.target.value,
                      });
                    }}
                  />
                </form>
                <div class="icon-search">
                  <i class="fas fa-search" onClick={this.update}></i>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
      </>
    );
  }
}
