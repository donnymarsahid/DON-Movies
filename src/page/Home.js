import React from 'react';
import CardMovie from '../cards/CardMovie';
import $ from 'jquery';

const Home = (props) => {
  if (props.movie.length < 1) {
    $('.results').html('movie not found');
  }
  const renderCardMovie = props.movie.map((movie) => {
    $('.results').html(props.value);
    return <CardMovie movie={movie} key={movie.id} />;
  });

  return (
    <>
      <div class="container mt-5">
        <div class="results"> </div>
        <div class="search-mobile d-flex justify-content-end">
          <input type="text" autoComplete="off" placeholder="search movies.." />
          <div class="icon-search">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div class="row">{renderCardMovie}</div>
      </div>
    </>
  );
};

export default Home;
