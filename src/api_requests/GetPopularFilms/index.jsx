

const GetPopularFilms = (setData) => {
  const getFilms = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDRiMmIyM2ZhNTRmYjQzYmQ0NTIxOTE2YTcxNThhYiIsInN1YiI6IjYxNGIyNzRjZDJjMGMxMDA2NjgyNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dy5eDenJJ2jmf5HZqrPpU2ylem0y6Knp2droz_djut0'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setData(response.results) )
      .catch(err => console.error(err));
  }
  getFilms();
}

export default GetPopularFilms;
