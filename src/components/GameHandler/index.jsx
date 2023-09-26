import React, { useState, useEffect } from "react";
import { Container, SectionContainer } from "./styled";
import SvgComponent from "../Arrow";
import GameLoose from "../../pages/GameLoose";
import Question from "../Question";
import GameHeader from "../GameHeader";
import useGameLogic from "./hooks/useGameLogic";

const GameHandler = ({ setIsStarted, gameData, setGameData, gameTheme }) => {
  const [
    questions,
    turn,
    score,
    userScore,
    rightAnswer,
    isLoose,
    setIsLoose,
    gameLoop,
  ] = useGameLogic(gameData, setGameData, gameTheme);

  return (
    <Container>
      <SvgComponent onClick={() => setIsStarted(false)} />
      {isLoose ? (
        <GameLoose userScore={userScore} setIsLoose={setIsLoose} />
      ) : (
        <>
          <GameHeader
            gameTheme={gameTheme}
            userScore={userScore}
            score={score}
          />
          <SectionContainer>
            {turn === gameData.length - 1 ? (
              <>
                <h2>hello winner</h2>
                <img src="../../winner.png" alt="winner" />
              </>
            ) : (
              questions &&
              questions.map((gameInfo, index) => {
                return (
                  <Question
                    gameInfo={gameInfo}
                    rightAnswer={rightAnswer}
                    gameLoop={gameLoop}
                    index={index}
                    key={gameInfo.id}
                  />
                );
              })
            )}
          </SectionContainer>
        </>
      )}
    </Container>
  );
};

export default GameHandler;
