import React, { useState, useEffect } from "react";
import postNewScore from "../../../api_requests/postNewScore";

const useGameLogic = (gameData, setGameData, gameTheme) => {
  const [questions, setQuestions] = useState([]);
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [isLoose, setIsLoose] = useState(false);

  const userScore = localStorage.getItem(gameTheme);

  const shuffle = () => {
    const arrayCopy = gameData.sort(() => 0.5 - Math.random());
    setGameData(arrayCopy);
  };
  useEffect(() => {
    shuffle();
    postNewScore();
  }, []);

  useEffect(() => {
    // Est ce que tu as essayer de tester ton jeu avec un tableau avec 3 entrées max ?
    // Je pense que tu ne vérifie pas le cas ou tu es a la fin du tableau
    if (gameData.length !== 0) {
      setQuestions([gameData[turn], gameData[turn + 1]]);
    }
  }, [gameData, turn]);

  const isRightAnswer = (userChoice) => {
    if (
      (questions[0].rate < questions[1].rate &&
        userChoice === questions[1].rate) ||
      (questions[0].rate > questions[1].rate &&
        userChoice === questions[0].rate) ||
      questions[0].rate === questions[1].rate
    ) {
      return true;
    }
    return false;
  };

  const gameLoop = (userChoice) => {
    // Pk tu set RightAnswer ici a true ?
    setRightAnswer(true);
    // PK un timeout ??
    setTimeout(() => {
      const answer = isRightAnswer(userChoice);
      if (answer) {
        setScore(score + 1);
        setTurn(turn + 1);
      } else {
        // set questions est trigger 2 fois
        setIsLoose(true);
        setScore(0);
        if (score > userScore) {
          localStorage.setItem(gameTheme, score);
        }
        setTurn(0);
        shuffle();
      }
      // // Pk tu set RightAnswer ici a false ici ensuite ? ?
      setRightAnswer(false);
    }, 1000);
  };
  return [
    questions,
    turn,
    score,
    userScore,
    rightAnswer,
    isLoose,
    setIsLoose,
    gameLoop,
  ];
};

export default useGameLogic;
