import {ImgContainer, GameTitle, GameSelector,Container} from "./styled.js";
const ChooseGame = () => {
  return (
    <Container>
      <h1>A vous de jouer </h1>
      <h2>Reussissez à faire un sans faute !</h2>
      <GameSelector>
        <ImgContainer onClick={() => console.log('ici passer a true ')}>
          <GameTitle>
          l'artiste le plus ecouté
          </GameTitle>
        </ImgContainer>
        <ImgContainer>
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

export default ChooseGame;
