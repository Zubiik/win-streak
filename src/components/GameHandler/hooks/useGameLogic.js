import React, { useState, useEffect } from "react";

const useGameLogic = (gameData, setGameData, gameTheme) => {
  const [questions, setQuestions] = useState([]);
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [isLoose, setIsLoose] = useState(false);

  const userScore = JSON.parse(localStorage.getItem(gameTheme));

  const shuffle = () => {
    const arrayCopy = gameData.sort(() => 0.5 - Math.random());
    setGameData(arrayCopy);
  };
  useEffect(() => {
    shuffle();
  }, []);

  const newHightScore = () => {
    if (userScore === null || score > userScore[0]) {
      const currentArray = [score, gameTheme];
      localStorage.setItem(gameTheme, JSON.stringify(currentArray));
    }
  };
  useEffect(() => {
    // Est ce que tu as essayer de tester ton jeu avec un tableau avec 3 entrées max ?
    // Je pense que tu ne vérifie pas le cas ou tu es a la fin du tableau
    if (gameData.length !== 0) {
      setQuestions([gameData[turn], gameData[turn + 1]]);
    }
  }, [gameData, turn]);

  const gameLoop = (currentAnswer) => {
    // Pk tu set RightAnswer ici a true ?
    setRightAnswer(true);
    setTimeout(() => {
      if (currentAnswer) {
        setScore(score + 1);
        setTurn(turn + 1);
      } else {
        // set questions est trigger 2 fois
        setIsLoose(true);
        newHightScore();
        setTurn(0);
        shuffle();
      }
      // Pk tu set RightAnswer ici a false ici ensuite ??
      setRightAnswer(false);
    }, 1000);
  };
  const isMore = (userChoice) => {
    if (questions[0].rate < userChoice || questions[0].rate === userChoice) {
      gameLoop(true);
    } else {
      gameLoop(false);
    }
  };
  const isLess = (userChoice) => {
    if (questions[0].rate > userChoice || questions[0].rate === userChoice) {
      gameLoop(true);
    } else {
      gameLoop(false);
    }
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
    isMore,
    isLess,
    setScore,
  ];
};

export default useGameLogic;
