import React from "react";
import { GameLooseContainer, Heading, Score, RetryButton } from "./styled";

const GameLoose = ({ userScore, setIsLoose }) => {
  return (
    <GameLooseContainer>
      <Heading>Perdu !</Heading>
      <Score>Score : {userScore}</Score>
      <RetryButton onClick={() => setIsLoose(false)}>Réessayer</RetryButton>
    </GameLooseContainer>
  );
};

export default GameLoose;
