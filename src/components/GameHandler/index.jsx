import React, { useState, useEffect } from "react";
import { Container, SectionContainer } from "./styled";
import SvgComponent from "../Arrow";
// eslint-disable-next-line import/extensions
import GameLoose from "../../pages/GameLoose/index.jsx";
import Question from "../Question";
import GameHeader from "../GameHeader";
import useGameLogic from "./hooks/useGameLogic";
import GameWin from "../GameWin";
// import postNewScore from "../../api_requests/postNewScore";
// import VsBar from "../VsBar";

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
    isMore,
    isLess,
    setScore,
  ] = useGameLogic(gameData, setGameData, gameTheme);
  return (
    <Container>
      <SvgComponent onClick={() => setIsStarted(false)} />
      {isLoose ? (
        <GameLoose
          userScore={userScore}
          setIsLoose={setIsLoose}
          gameTheme={gameTheme}
          score={score}
          setScore={setScore}
        />
      ) : (
        <>
          <GameHeader
            gameTheme={gameTheme}
            userScore={userScore}
            score={score}
          />
          <SectionContainer>
            {/* <VsBar /> */}
            {turn === gameData.length - 1 ? (
              <GameWin />
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
                    isMore={isMore}
                    isLess={isLess}
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
