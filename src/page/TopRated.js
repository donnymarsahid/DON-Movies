import React from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import $ from 'jquery';
import CardTopRated from '../cards/CardTopRated';

const TopRated = (props) => {
  if (props.movieTopRated.length < 1) {
    $('.results').html('movie not found');
  }
  const dataTopRated = props.movieTopRated.map((movie) => {
    if (props.value < 1) {
      $('.results').html('Top Rated');
    } else {
      $('.results').html(props.value);
    }
    return <CardTopRated movie={movie} key={movie.id} />;
  });
  return (
    <>
      <div class="container mt-5">
        <div class="section-movie">
          <h3 className="results"> </h3>
          <div class="row">{dataTopRated}</div>
        </div>
      </div>
    </>
  );
};

export default TopRated;
