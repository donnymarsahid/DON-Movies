import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Popular from './page/Popular';
import React, { useState, useEffect } from 'react';
import TopRated from './page/TopRated';
import UpComing from './page/UpComing';
import axios from 'axios';

function App() {
  const [movie, setMovie] = useState([]);
  const [value, setValue] = useState('');
  const [moviePopular, setMoviePopular] = useState([]);
  const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?';
  const API_KEY = 'api_key=1232aba0581e79269e7da9fb05d9521e';
  const BASE_URL_POPULAR = 'https://api.themoviedb.org/3/';

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`).then((response) => {
      setMovie(response.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL_POPULAR}movie/popular?${API_KEY}`).then((res) => {
      setMoviePopular(res.data.results);
    });
  }, []);

  const updateMovie = (search, value) => {
    setMovie(search);
    setValue(value);
  };
  const updateMoviePopular = (search, value) => {
    setMoviePopular(search);
    setValue(value);
  };

  return (
    <>
      <Router>
        <Route render={(props) => <Navbar {...props} movie={movie} updateMovie={updateMovie} updateMoviePopular={updateMoviePopular} />} />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} movie={movie} value={value} />} />
          <Route path="/popular" render={(props) => <Popular {...props} moviePopular={moviePopular} value={value} />} />
          <Route path="/toprated" component={TopRated} />
          <Route path="/upcoming" component={UpComing} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
