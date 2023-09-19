
const tmdbNormalizer = (data) => {
  const dataNormalized = [];
  data.forEach(artist => {
    dataNormalized.push({ 'title': film.title, 'rate': film.vote_average, 'id': film.id })
  });
  return dataNormalized;
}
export default tmdbNormalizer;