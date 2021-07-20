import React from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import CardUpComing from '../cards/CardUpComing';
import $ from 'jquery';

const UpComing = (props) => {
  if (props.movieUpComing.length < 1) {
    $('.results').html('movie not found');
  }
  const dataUpComing = props.movieUpComing.map((movie) => {
    if (props.value < 1) {
      $('.results').html('Up Coming');
    } else {
      $('.results').html(props.value);
    }
    return <CardUpComing movie={movie} key={movie.id} />;
  });
  return (
    <>
      <div class="container mt-5">
        <div class="section-movie">
          <h3 className="results"> </h3>
          <div class="row">{dataUpComing}</div>
        </div>
      </div>
    </>
  );
};

export default UpComing;
