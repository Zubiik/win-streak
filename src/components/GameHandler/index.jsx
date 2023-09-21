import { useState, useEffect } from 'react';
import { QuestionCustom, Container, QuestionsContainer, ResponseCustom, SectionContainer,Circle } from './styled';

const GameHandler = ({setIsTrue,gameData, setGameData}) => {
  const [questions, setQuestions] = useState([]);
  const [turn, setTurn] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);

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
        setTurn(0);
        shuffle();
      }
      setRightAnswer(false);
  }, 1000);
  }

  return (
    <Container>
      <p onClick={() => setIsTrue(false)}>Retour</p>
      <h2>Quel est l'artiste le plus ecouté du mois ?</h2>
      <SectionContainer>
        {
          turn === gameData.length - 1 ? <> <h2>hello winner</h2><img src='../../winner.png'/></>
            : questions && questions.map((artistData) => {
              console.log(artistData.images[2].url);
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

