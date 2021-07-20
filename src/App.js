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
  const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?';
  const API_KEY = 'api_key=1232aba0581e79269e7da9fb05d9521e';

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`).then((response) => {
      setMovie(response.data.results);
    });
  }, []);

  const updateMovie = (search) => {
    setMovie(search);
  };

  return (
    <>
      <Router>
        <Route render={(props) => <Navbar {...props} movie={movie} updateMovie={updateMovie} />} />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} movie={movie} />} />
          <Route path="/popular" component={Popular} />
          <Route path="/toprated" component={TopRated} />
          <Route path="/upcoming" component={UpComing} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
