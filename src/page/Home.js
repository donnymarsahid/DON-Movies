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
        <div class="section-movie">
          <div class="results"> </div>
          <div class="row">{renderCardMovie}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
