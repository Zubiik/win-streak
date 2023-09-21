import { useState, useEffect } from 'react';
import { QuestionCustom, Container, QuestionsContainer, ResponseCustom, SectionContainer, Circle, Title } from './styled';
import SvgComponent from '../Arrow';

const GameHandler = ({setIsTrue,gameData, setGameData}) => {
  const [questions, setQuestions] = useState([]);
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);
  let userScore = localStorage.getItem("userScore");

  useEffect(() => {
    if (gameData.length !== 0) {
      setQuestions([gameData[turn], gameData[turn + 1]]);
    }
  }, [gameData, turn])

  const shuffle = () => {
    const arrayCopy = gameData.sort((a, b) => Math.random() - Math.random());
    setGameData(arrayCopy);
  }
  const isRightAnswer = (userChoice) => {
    if (((questions[0].followers.total < questions[1].followers.total) && (userChoice === questions[1].followers.total))
      || ((questions[0].followers.total > questions[1].followers.total) && (userChoice === questions[0].followers.total))) {
      setScore(score + 1);
      return true;
    }
    return false;
  }

  const gameLoop = (userChoice) => {
    setRightAnswer(true);
    setTimeout(function(){
      const answer = isRightAnswer(userChoice);
      if (answer) {
        setTurn(turn + 1)
      }
      else {
        window.alert('perdu');
        //set questions est trigger 2 fois
        setScore(0);
        localStorage.setItem("userScore", score);
        setTurn(0);
        shuffle();
      }
      setRightAnswer(false);
  }, 1000);
  }

  return (
    <Container>
      <SvgComponent onClick={() => setIsTrue(false)}/>
      <Title>Quel est l'artiste le plus ecouté du mois ?</Title>
      <p>score: {score} </p>
      <p>record:{userScore} </p>
      <SectionContainer>
        {
          turn === gameData.length - 1 ?
            <>
              <h2>hello winner</h2><img src='../../winner.png' />
            </>
            : questions && questions.map((artistData) => {
        return (
          <QuestionsContainer key={artistData.name}>
            <Circle src={artistData.images[0].url} />
            <QuestionCustom onClick={() => gameLoop(artistData.followers.total)}>{artistData.name} </QuestionCustom>
            {rightAnswer && <ResponseCustom>{artistData.followers.total}</ResponseCustom>}
          </QuestionsContainer>
          )
        })}
      </SectionContainer> 

    </Container>
  )
}

export default GameHandler;

