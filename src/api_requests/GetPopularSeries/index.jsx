import tmdbSeriesNormalizer from "../../utils/tmdbSeriesNormalizer";

const GetPopularFilms = (setGameData) => {
  const arraycopy = [];
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDRiMmIyM2ZhNTRmYjQzYmQ0NTIxOTE2YTcxNThhYiIsInN1YiI6IjYxNGIyNzRjZDJjMGMxMDA2NjgyNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dy5eDenJJ2jmf5HZqrPpU2ylem0y6Knp2droz_djut0'
      }
    };

       fetch('https://api.themoviedb.org/3/tv/top_rated?page=2', options)
       .then(response => response.json())
        .then(response => {
          const dataNormalized = tmdbSeriesNormalizer(response.results)
          setGameData(dataNormalized)
        })
       .catch(err => console.error(err));
}

export default GetPopularFilms;
