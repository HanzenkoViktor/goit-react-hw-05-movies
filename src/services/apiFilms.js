import axios from 'axios';

class API {
  constructor() {
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.apiKey = 'api_key=9cca312caffd11f4ae9f11244d585025';
  }

  getTrending = async period => {
    try {
      const {
        data: { results },
      } = await axios.get(
        `${this.baseUrl}/trending/movie/${period}?${this.apiKey}`
      );
      return results;
    } catch (error) {
      console.log(error.message);
    }
  };

  searchMovie = async query => {
    try {
      const {
        data: { results },
      } = await axios.get(
        `${this.baseUrl}/search/movie?${this.apiKey}&query=${query}`
      );

      return results;
    } catch (error) {
      console.log(error.message);
    }
  };

  getMovieById = async movieId => {
    try {
      const { data } = await axios.get(
        `${this.baseUrl}/movie/${movieId}?${this.apiKey}`
      );

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  getMovieCredits = async movieId => {
    try {
      const { data } = await axios.get(
        `${this.baseUrl}/movie/${movieId}/credits?${this.apiKey}`
      );

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  getMovieReviews = async movieId => {
    try {
      const {
        data: { results },
      } = await axios.get(
        `${this.baseUrl}/movie/${movieId}/reviews?${this.apiKey}`
      );

      return results;
    } catch (error) {
      console.log(error.message);
    }
  };
}

const MovieAPI = new API();

export default MovieAPI;
