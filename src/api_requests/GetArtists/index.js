import { idsList } from "../../utils/idsList";

const GetArtists = (setGameData) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer BQDl0L361Pe-hY3cYcjtyUXfsDO9XPxEcE7mai5rrR1KBkYxqQ9-A8QteMUZZkt9fEFh0TjFTrwDA3FrGVpSIL-0jO6aNnauUHojErgBI063-EP-s5k'
      }
    };
   
     fetch('https://api.spotify.com/v1/artists?ids='+ idsList, options)
       .then(response => response.json())
       .then(response => console.log(response.artists))
       .catch(err => console.error(err));
}

export default GetArtists;
