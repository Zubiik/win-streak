import React from "react";
import { GameImg, GameTitleText,MiniatureContainer } from "./styled";

const GameMiniature = ({
  setIsStarted,
  setGameData,
  setGameTheme,
  currentGame,
}) => {
  const GameToRun = () => {
    setIsStarted(true);
    setGameData(currentGame.datas);
    setGameTheme(currentGame.title);
  };
  console.log(`../${currentGame.url}`);
  return (
    <MiniatureContainer onClick={() => GameToRun()}>
      <GameImg src={currentGame.url} />
      <GameTitleText>{currentGame.title}</GameTitleText>
    </MiniatureContainer>
  );
};

export default GameMiniature;
