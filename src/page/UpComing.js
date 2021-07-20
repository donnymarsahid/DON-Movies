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
        <div class="search-mobile d-flex justify-content-end">
          <input type="text" autoComplete="off" placeholder="search movies.." />
          <div class="icon-search">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div class="section-popular ">
          <h3 className="results"> </h3>
          <div class="row">{dataUpComing}</div>
        </div>
      </div>
    </>
  );
};

export default UpComing;
