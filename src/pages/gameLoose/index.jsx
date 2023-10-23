import React from "react";
import { GameLooseContainer, Heading, Score, RetryButton } from "./styled";
import GameScoreForm from "../../components/GameScoreForm";
import UsersScoreList from "../../components/UsersScoreList";

const GameLoose = ({ userScore, setIsLoose, gameTheme }) => {
  console.log("userScore", userScore);
  return (
    <GameLooseContainer>
      <Heading>Perdu !</Heading>
      <Score>Score : {userScore[0]}</Score>
      <Score>Partie : {userScore[1]}</Score>
      <GameScoreForm gameTheme={gameTheme} />
      <RetryButton onClick={() => setIsLoose(false)}>Réessayer</RetryButton>
      <UsersScoreList />
    </GameLooseContainer>
  );
};

export default GameLoose;
