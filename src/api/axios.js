import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGFkZjk1NmFjM2YyMTg2OWE2NjIyOTkyY2U2YTM0NSIsInN1YiI6IjY0OTU0ZGZmZDVmZmNiMDBmZmU4M2U4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iiu3q9xX_Hiz4fE-Gnb3PgbYmRozsS0MCi69ZVEYt1w",
  },
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;
