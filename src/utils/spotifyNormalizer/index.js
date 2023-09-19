
const tmdbNormalizer = (data) => {
  // TODO faire une gestion si null
  const dataNormalized = [];
  data.forEach(artist => {
    dataNormalized.push({ 'name': artist.name, 'rate': artist.followers.total, 'id': artist.id,'images': artist.images})
  });
  return dataNormalized;
}
export default tmdbNormalizer;