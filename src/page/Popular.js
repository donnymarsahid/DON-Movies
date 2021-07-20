import React from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import CardPopular from '../cards/CardPopular';
import $ from 'jquery';

const Popular = (props) => {
  if (props.moviePopular.length < 1) {
    $('.results').html('movie not found');
  }
  const dataPopular = props.moviePopular.map((movie) => {
    if (props.value < 1) {
      $('.results').html('Popular');
    } else {
      $('.results').html(props.value);
    }
    return <CardPopular movie={movie} key={movie.id} />;
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
          {/* <div class="results"> </div> */}
          <h3 className="results"> </h3>
          <div class="row">{dataPopular}</div>
        </div>
      </div>
    </>
  );
};

export default Popular;
