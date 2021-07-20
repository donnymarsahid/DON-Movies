import React from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import star from '../assets/img/star.svg';
import { Link } from 'react-router-dom';

const CardTopRated = ({ movie }) => {
  return (
    <>
      <div class="col-md-2 mb-3">
        <div class="box-top-rated">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.poster_path} className="img-fluid img-top-rated" />
          <div class="overlay-title text-center">
            <p>{movie.title}</p>
          </div>
          <div class="rated d-flex pt-1">
            <img src={star} alt="star" width="20px" height="20px" class="me-1" />
            <p>{movie.vote_average}</p>
          </div>
          <div class="detail  d-flex align-items-center justify-content-center">
            <Link to={`/detail/${movie.id}`}>
              <button class="btn-detail">Detail</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTopRated;
