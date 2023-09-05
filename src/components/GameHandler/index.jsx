import { useState,useEffect,useRef } from 'react'
import GetPopularFilms from '../../api_requests/GetPopularFilms';

const GameHandler = () => {
  const [gameData, setGameData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    GetPopularFilms(setGameData);
  }, []);

  useEffect(() => {
    if (gameData.length !== 0) {
      setQuestions([gameData[turn], gameData[turn+ 1]]);
    }
  }, [gameData, turn])

  const shuffle = () => {
    const randomNumber = Math.random();
    const roundedNumber = Math.floor(randomNumber * 10);
    const roundedToDecimal = roundedNumber / 10;
    const arrayCopy = gameData.sort((a, b) => roundedToDecimal - Math.random());
    setGameData(arrayCopy);
  }
  const isRightAnswer = (userChoice) => {
    let rightAnswer;
    if (questions[0].rate < questions[1].rate) {
      rightAnswer = questions[1].rate;
    } else {
      rightAnswer = questions[0].rate;
    }
    if (userChoice === rightAnswer ) {
      return true;
    } else {
      return false;
    }
  }

  const gameLoop = (userChoice) => {
    const answer = isRightAnswer(userChoice);
    if (answer === true) {
      setTurn(turn + 1)
    } else if (turn === gameData.length -1) {
      console.log('wiiiin');
    } 
    else {
      window.alert('perdu');
      setTurn(0);
      shuffle();    }
  }
  return (
    <>
      <h1>win streak </h1>
      <div>
        {
          turn === gameData.length - 1 ? <> <h2>hello winner</h2><img src='../../winner.png'/></>
          : questions && questions.map((filmData) => {
        return (
          <div key={filmData.id}>
            <button onClick={() => gameLoop(filmData.rate)}>{filmData.title} {filmData.rate}</button>
          </div>
        )
      })}
      </div> 

    </>
  )
}

export default GameHandler;
