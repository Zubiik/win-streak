import { ImgContainer, GameTitle, GameSelector, Container } from "./styled.js";
import { artistsData } from '../../mocked__data/artistsData.js';
import { filmsData } from '../../mocked__data/filmsData.js';

const HomePage = ({ setIsTrue, setGameData,setGameTheme }) => {
 
  return (
    <Container>
      <h1>A vous de jouer </h1>
      <h2>Reussissez à faire un sans faute !</h2>
      <GameSelector>
        <ImgContainer onClick={() => { setIsTrue(true); setGameData(artistsData); setGameTheme('L\'artiste le plus ecouté')}}>
          <GameTitle>
            l'artiste le plus ecouté
          </GameTitle>
        </ImgContainer>
        <ImgContainer onClick={() => { setIsTrue(true); setGameData(filmsData); setGameTheme('Le film le mieux noté')}}>
          <GameTitle>
            le film le mieux noté
          </GameTitle>
        </ImgContainer>
        <ImgContainer>
          <GameTitle> 
            le meilleur fromage
          </GameTitle> 
        </ImgContainer>
      </GameSelector>
    </Container>
  )
}

export default HomePage;
