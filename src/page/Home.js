import React from 'react';
import CardMovie from '../cards/CardMovie';

const Home = (props) => {
  const renderCardMovie = props.movie.map((movie) => {
    return <CardMovie movie={movie} key={movie.id} />;
  });
  return (
    <>
      <div class="container mt-5">
        <h3 class="results"> </h3>
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
