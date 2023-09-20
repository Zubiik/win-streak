import {ImgContainer, GameTitle, GameSelector} from "./styled.js";
const ChooseGame = () => {
  return (
    <div>
      <h1>Ici on choisit le jeu </h1>
      <h2>reussir a faire plein de trucs</h2>
      <GameSelector>
        <ImgContainer>
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
    </div>
  )
}

export default ChooseGame;
