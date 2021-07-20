import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/style.css';

const API_KEY = 'api_key=1232aba0581e79269e7da9fb05d9521e';
const BASE_URL_LINK = 'https://api.themoviedb.org/3/';

export default class Detail extends Component {
  state = {
    video: [],
    details: [],
  };

  componentDidMount() {
    const idDetails = this.props.match.params.idDetail;
    axios.get(`${BASE_URL_LINK}movie/${idDetails}/videos?${API_KEY}`).then((res) => {
      this.setState({
        video: res.data.results[0],
      });
    });
    axios.get(`${BASE_URL_LINK}movie/${idDetails}?${API_KEY}`).then((res) => {
      this.setState({
        details: res,
      });
    });
  }

  render() {
    console.log(this.state.details);
    return (
      <div>
        <div class="container mt-3">
          <div class="embed-responsive embed-responsive-16by9 ">
            <iframe class="embed-responsive-item img-fluid" title=" " src={`https://www.youtube.com/embed/${this.state.video.key}?rel=0`} allowfullscreen></iframe>
            <h1>tester</h1>
          </div>
        </div>
      </div>
    );
  }
}
