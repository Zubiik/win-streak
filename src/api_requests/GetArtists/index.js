import { idsList } from "../../utils/idsList";
import spotifyNormalizer from '../../utils/spotifyNormalizer';

const GetArtists = (setGameData) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer BQDs2kTA1XKg_EuElQIROsXlUc90_FMFGNi82ULr40zpCAkzFAFIkoHBpXNS8ssn7tLhf-5QoY6uaOwy6p70rTlTOtPqzT2Hqey8_p7-iiHFwY7QPoc'
      }
    };
   
     fetch('https://api.spotify.com/v1/artists?ids='+ idsList, options)
       .then(response => response.json())
       .then(response => console.log(response))
       .then(response => {
        const dataNormalized = spotifyNormalizer(response.artists)
        setGameData(dataNormalized)
      })
       .catch(err => console.error(err));
}

export default GetArtists;
