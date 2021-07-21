import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Popular from './page/Popular';
import React, { useState, useEffect } from 'react';
import TopRated from './page/TopRated';
import UpComing from './page/UpComing';
import Detail from './page/Detail';
import axios from 'axios';
import NoMatch from './404/NoMatch';

function App() {
  const [movie, setMovie] = useState([]);
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieTopRated, setMovieTopRated] = useState([]);
  const [movieUpComing, setMovieUpComing] = useState([]);
  const [value, setValue] = useState('');

  const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?';
  const API_KEY = 'api_key=1232aba0581e79269e7da9fb05d9521e';
  const BASE_URL_LINK = 'https://api.themoviedb.org/3/';

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`).then((response) => {
      setMovie(response.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL_LINK}movie/popular?${API_KEY}`).then((res) => {
      setMoviePopular(res.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL_LINK}movie/top_rated?${API_KEY}`).then((res) => {
      setMovieTopRated(res.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL_LINK}movie/upcoming?${API_KEY}`).then((res) => {
      setMovieUpComing(res.data.results);
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
  const updateMovieTopRated = (search, value) => {
    setMovieTopRated(search);
    setValue(value);
  };
  const updateMovieUpComing = (search, value) => {
    setMovieUpComing(search);
    setValue(value);
  };

  return (
    <>
      <Router>
        <Route render={(props) => <Navbar {...props} movie={movie} updateMovie={updateMovie} updateMoviePopular={updateMoviePopular} updateMovieTopRated={updateMovieTopRated} updateMovieUpComing={updateMovieUpComing} />} />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} movie={movie} value={value} />} />
          <Route path="/popular" render={(props) => <Popular {...props} moviePopular={moviePopular} value={value} />} />
          <Route path="/toprated" render={(props) => <TopRated {...props} movieTopRated={movieTopRated} value={value} />} />
          <Route path="/upcoming" render={(props) => <UpComing {...props} movieUpComing={movieUpComing} value={value} />} />
          <Route path="/detail/:idDetail" component={Detail} />
          {/* 404 Page Not Found */}
          <Route path="/*" component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
