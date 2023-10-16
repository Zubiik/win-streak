import React from "react";
import { GameLooseContainer, Heading, Score, RetryButton } from "./styled";
import GameScoreForm from "../../components/GameScoreForm";
import UsersScoreList from "../../components/UsersScoreList";

const GameLoose = ({ userScore, setIsLoose, gameTheme }) => {
  return (
    <GameLooseContainer>
      <Heading>Perdu !</Heading>
      <Score>Score : {userScore}</Score>
      <GameScoreForm gameTheme={gameTheme} />
      <RetryButton onClick={() => setIsLoose(false)}>Réessayer</RetryButton>
      <UsersScoreList />
    </GameLooseContainer>
  );
};

export default GameLoose;
