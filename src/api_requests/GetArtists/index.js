import { idsList } from "../../utils/idsList";
import spotifyNormalizer from '../../utils/spotifyNormalizer';

const GetArtists = (setGameData) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer BQDYa1EsMzg_h_m4SEcjmHopqJIDvY80TjoD7XTq2H2CyL6zOCkHo_j9AMZu_KN2BYKS9_dJwXnqI-6L4EQy9KXMQvhqxS1Mqn5ZPS89sNp2U290DZU'
      }
    };
   
     fetch('https://api.spotify.com/v1/artists?ids='+ idsList, options)
       .then(response => response.json())
       .then(response => {
        const dataNormalized = spotifyNormalizer(response.artists)
        setGameData(dataNormalized)
      })
       .catch(err => console.error(err));
}

export default GetArtists;
