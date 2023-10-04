import React from "react";
import { GameLooseContainer, Heading, Score, RetryButton } from "./styled";
import GameScoreForm from "../../components/GameScoreForm";

const GameLoose = ({ userScore, setIsLoose }) => {
  return (
    <GameLooseContainer>
      <Heading>Perdu !</Heading>
      <Score>Score : {userScore}</Score>
      <GameScoreForm />
      <RetryButton onClick={() => setIsLoose(false)}>Réessayer</RetryButton>
    </GameLooseContainer>
  );
};

export default GameLoose;
