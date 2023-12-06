import React from "react";
import { GameLooseContainer, Heading, Score, RetryButton } from "./styled";
import GameScoreForm from "../../components/GameScoreForm";
import UsersScoreList from "../../components/UsersScoreList";

const GameLoose = ({ userScore, setIsLoose, gameTheme, score, setScore }) => {
  console.log("userScore", userScore);
  console.log("userScore", score);
  return (
    <GameLooseContainer>
      <Heading>Perdu !</Heading>
      <Score>Partie : {userScore[1]}</Score>
      <Score>Score : {score}</Score>
      {/* <GameScoreForm gameTheme={gameTheme} score={score} /> */}
      <RetryButton
        onClick={() => {
          setIsLoose(false);
          setScore(0);
        }}
      >
        Réessayer
      </RetryButton>
      <UsersScoreList />
    </GameLooseContainer>
  );
};

export default GameLoose;
