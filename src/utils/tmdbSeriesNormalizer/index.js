
const tmdbSeriesNormalizer = (data) => {
  const dataNormalized = [];
  data.forEach(serie => {
    dataNormalized.push({ 'title': serie.name, 'rate': serie.vote_average, 'id': serie.id })
  });
  return dataNormalized;
}
export default tmdbSeriesNormalizer;