import { useState, useEffect } from 'react';
import { QuestionCustom, Container, QuestionsContainer, ResponseCustom, SectionContainer, Circle, Title } from './styled';
import SvgComponent from '../Arrow';

const GameHandler = ({ setIsTrue, gameData, setGameData,gameTheme }) => {
  const [questions, setQuestions] = useState([]);
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);
  let userScore = localStorage.getItem("userScore");
  console.log(gameTheme);

  const shuffle = () => {
    const arrayCopy = gameData.sort((a, b) => Math.random() - Math.random());
    setGameData(arrayCopy);
  }

  useEffect(() => {
    if (gameData.length !== 0) {
      shuffle();
      setQuestions([gameData[turn], gameData[turn + 1]]);
    }
  }, [gameData, turn])

  const isRightAnswer = (userChoice) => {
    if (((questions[0].rate < questions[1].rate) && (userChoice === questions[1].rate))
      || ((questions[0].rate > questions[1].rate) && (userChoice === questions[0].rate)) || (questions[0].rate === questions[1].rate)) {
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
        if (score > userScore) {
          localStorage.setItem("userScore", score);
        }
        setTurn(0);
        shuffle();
      }
      setRightAnswer(false);
  }, 1000);
  }
   return (
    <Container>
      <SvgComponent onClick={() => setIsTrue(false)}/>
      <Title>{gameTheme}</Title>
      <p>score: {score} </p>
      <p>record:{userScore} </p>
      <SectionContainer>
        {
          turn === gameData.length - 1 ?
            <>
              <h2>hello winner</h2><img src='../../winner.png' />
            </>
            : questions && questions.map((gameInfo) => {
        return (
          <QuestionsContainer key={gameInfo.id}>
            <Circle src={gameInfo.url} />
            <QuestionCustom onClick={() => gameLoop(gameInfo.rate)}>{gameInfo.title} </QuestionCustom>
            {rightAnswer && <ResponseCustom>{gameInfo.rate}</ResponseCustom>}
          </QuestionsContainer>
          )
        })}
      </SectionContainer> 

    </Container>
  )
}

export default GameHandler;

