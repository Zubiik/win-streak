import tmdbNormalizer from "../../utils/tmdbNormalizer";

const GetPopularFilms = (setGameData) => {
  const arrayCopy = [];
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDRiMmIyM2ZhNTRmYjQzYmQ0NTIxOTE2YTcxNThhYiIsInN1YiI6IjYxNGIyNzRjZDJjMGMxMDA2NjgyNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dy5eDenJJ2jmf5HZqrPpU2ylem0y6Knp2droz_djut0",
    },
  };
  // for (let index = 0; index < 3; index++) {
  //   fetch('https://api.themoviedb.org/3/movie/popular?page='+ index, options)
  //   .then(response => response.json())
  //   .then(response => arrayCopy.push(...response.results))
  //   .catch(err => console.error(err));

  // }
  fetch("https://api.themoviedb.org/3/movie/popular?page=1", options)
    .then((response) => response.json())
    .then((response) => arrayCopy.push(...response.results))
    .catch((err) => console.error(err));

  fetch("https://api.themoviedb.org/3/movie/popular?page=2", options)
    .then((response) => response.json())
    .then((response) => arrayCopy.push(...response.results))
    .then((response) => {
      const dataNormalized = tmdbNormalizer(arrayCopy);
      setGameData(dataNormalized);
    })
    .catch((err) => console.error(err));
};

export default GetPopularFilms;
