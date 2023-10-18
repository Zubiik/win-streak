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
import miniaturesData from "../../mocked__data/miniaturesData";

const HomePage = ({ setIsStarted, setGameData, setGameTheme }) => {
  return (
    <Container>
      <SubHeading>Arriverez-vous à faire un sans faute ?</SubHeading>
      <GameSelector>
        {miniaturesData.map((currentGame) => {
          return (
            <div key={currentGame.title}>
              <GameMiniature
                currentGame={currentGame}
                setIsStarted={setIsStarted}
                setGameData={setGameData}
                setGameTheme={setGameTheme}
              />
            </div>
          );
        })}
      </GameSelector>
    </Container>
  );
};

export default HomePage;
