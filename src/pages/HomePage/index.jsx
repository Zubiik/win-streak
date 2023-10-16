import React from "react";
import GameMiniature from "../../components/GameMiniature";
import {
  ImgContainer,
  GameTitle,
  GameSelector,
  Container,
  Heading,
  SubHeading,
} from "./styled";
import artistsData from "../../mocked__data/artistsData";
import filmsData from "../../mocked__data/filmsData";
import cheeseData from "../../mocked__data/cheeseData";
import miniaturesData from "../../mocked__data/miniaturesData";

const HomePage = ({ setIsStarted, setGameData, setGameTheme }) => {
  console.log(miniaturesData);
  return (
    <Container>
      <SubHeading>Arriverez-vous à faire un sans faute ?</SubHeading>
      <GameSelector>
        {miniaturesData.map((currentGame) => {
          return (
            <div>
              <GameMiniature
                currentGame={currentGame}
                setIsStarted={setIsStarted}
                setGameData={setGameData}
                setGameTheme={setGameTheme}
              />
            </div>
          );
        })}
        {/* <ImgContainer
          onClick={() => {
            setIsStarted(true);
            setGameData(artistsData);
            setGameTheme("L'artiste le plus ecouté");
          }}
        >
          <GameTitle>L'artiste le plus ecouté</GameTitle>
        </ImgContainer>
        <ImgContainer
          onClick={() => {
            setIsStarted(true);
            setGameData(filmsData);
            setGameTheme("Le film le mieux noté");
          }}
        >
          <GameTitle>le film le mieux noté</GameTitle>
        </ImgContainer>
        <ImgContainer
          onClick={() => {
            setIsStarted(true);
            setGameData(cheeseData);
            setGameTheme("Le meilleur fromage");
          }}
        >
          <GameTitle>le meilleur fromage</GameTitle>
        </ImgContainer> */}
      </GameSelector>
    </Container>
  );
};

export default HomePage;
