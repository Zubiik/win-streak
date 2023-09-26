import { useState, useEffect } from 'react';
import {
  QuestionCustom,
  Container,
  QuestionsContainer,
  Score,
  ScoreContainer,
  ResponseCustom,
  SectionContainer,
  Circle,
  Title
} from './styled';
import SvgComponent from '../Arrow';
import GameLoose from '../../pages/gameLoose';
import Question from '../Question';

const GameHandler = ({ setIsTrue, gameData, setGameData, gameTheme }) => {
  // Mettre toute la logique dans un CustomHook. Creer un dossier hooks/ dans le dossier GameHandler/

  const [questions, setQuestions] = useState([]);
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [isLoose, setIsLoose] = useState(false);

  let userScore = localStorage.getItem(gameTheme);

  const shuffle = () => {
    //  Effectivement ta randomisation n'est pas bonne, normalement tu dois rentrer un chiffre 
    const arrayCopy = gameData.sort((a, b) => Math.random() - Math.random());
    setGameData(arrayCopy);
  }
  useEffect(() => {
    shuffle();
  }, [])

  useEffect(() => {
    // Est ce que tu as essayer de tester ton jeu avec un tableau avec 3 entrées max ?
    // Je pense que tu ne vérifie pas le cas ou tu es a la fin du tableau
    if (gameData.length !== 0) {
      setQuestions([gameData[turn], gameData[turn + 1]]);
    }
  }, [gameData, turn])

  const isRightAnswer = (userChoice) => {
    if (((questions[0].rate < questions[1].rate) && (userChoice === questions[1].rate))
      || ((questions[0].rate > questions[1].rate) && (userChoice === questions[0].rate)) || (questions[0].rate === questions[1].rate)) {      
      return true;
    }
    return false;
  }

  const gameLoop = (userChoice) => {
    // Pk tu set RightAnswer ici a true ?
    setRightAnswer(true);
    // PK un timeout ??
    setTimeout(function () {
      const answer = isRightAnswer(userChoice);
      if (answer) {
        // TU devrais set le score ici !
        setScore(score + 1);
        setTurn(turn + 1)
      }
      else {
        //set questions est trigger 2 fois
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
  }
   return (
    <Container>
      <SvgComponent onClick={() => setIsTrue(false)} />
       {isLoose ?
         <GameLoose userScore={userScore} setIsLoose={setIsLoose} /> :
        //  Creer un composant GameHeader
    <>
           <Title>{gameTheme}</Title>
           <ScoreContainer>
            <Score>score: {score} </Score>
            <Score>record:{userScore} </Score>
           </ScoreContainer>
      <SectionContainer>
        {
          turn === gameData.length - 1 ?
          <>
              <h2>hello winner</h2><img src='../../winner.png' />
            </>
                 : questions && questions.map((gameInfo, index) => {
                   return (
                     <Question gameInfo={gameInfo} rightAnswer={rightAnswer} gameLoop={gameLoop} index={index} />
          )
        })}
      </SectionContainer> 
    </>

      }

    </Container>
  )
}

export default GameHandler;

