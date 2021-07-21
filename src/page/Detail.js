import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/style.css';
import star from '../assets/img/star.svg';

const API_KEY = 'api_key=1232aba0581e79269e7da9fb05d9521e';
const BASE_URL_LINK = 'https://api.themoviedb.org/3/';

export default class Detail extends Component {
  state = {
    video: [],
    details: [],
    genre: '',
    production: '',
  };

  componentDidMount() {
    const idDetails = this.props.match.params.idDetail;
    axios.get(`${BASE_URL_LINK}movie/${idDetails}/videos?${API_KEY}`).then((res) => {
      this.setState({
        video: res.data.results[0],
      });
    });
    axios.get(`${BASE_URL_LINK}movie/${idDetails}?${API_KEY}`).then((res) => {
      const genre = res.data.genres.map((genre) => {
        return (
          <div class="genre-1 p-2 me-3 col-3" style={{ backgroundColor: 'rgb(155, 155, 155)', borderRadius: '5px' }}>
            {genre.name}
          </div>
        );
      });
      const production = res.data.production_companies.map((production) => {
        return <>{production.name}</>;
      });
      this.setState({
        details: res.data,
        genre: genre,
        production: production,
      });
    });
  }

  render() {
    console.log(this.state.details);
    console.log(this.state.genre);
    return (
      <div>
        <div class="container mt-3">
          <div class="embed-responsive embed-responsive-16by9 ">
            <iframe class="embed-responsive-item img-fluid" title=" " src={`https://www.youtube.com/embed/${this.state.video.key}?rel=0`} allowfullscreen></iframe>
            <div class="box-title text-light p-3 border-bottom border-light" style={{ backgroundColor: '#E34D34' }}>
              <h1>{this.state.details.title}</h1>
              <div class=" d-flex pt-1">
                <img src={star} alt="star" width="25px" height="25px" class="me-1" />
                <h4>{this.state.details.vote_average}</h4>
              </div>
              <p>Popularity : {this.state.details.popularity}</p>
              <div className="border-bottom border-light"></div>
              <p class="mt-3">Genre :</p>
              <div class="genre d-flex row">{this.state.genre}</div>
              <p className="mt-3">Tag line : {this.state.details.tagline} </p>
              <p className="mt-3">Languange : {this.state.details.original_language} </p>
              <p className="mt-3">Realease : {this.state.details.release_date} </p>
              <p className="mt-3">Production : {this.state.production} </p>
              <p className="mt-3">Overview : {this.state.details.overview} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
