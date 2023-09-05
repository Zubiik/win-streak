import { useState,useEffect,useRef } from 'react'
import GetPopularFilms from '../../api_requests/GetPopularFilms';

// let TURN = 0;

const GameHandler = () => {
  const [gameData, setGameData] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    GetPopularFilms(setGameData);
  }, []);

  useEffect(() => {
    if (gameData.length !== 0 && turn < gameData.length -1) {
      setDataToShow([gameData[turn], gameData[turn+ 1]]);
    } else {
      console.log('gagné');
    }
  }, [gameData, turn])

  const shuffle = () => {
    const arrayCopy = gameData.sort((a, b) => 0.5 - Math.random());
    setGameData(arrayCopy);
  }
  const isRightAnswer = (userChoice) => {
    let rightAnswer;
    if (dataToShow[0].rate < dataToShow[1].rate) {
      rightAnswer = dataToShow[1].rate;
    } else {
      rightAnswer = dataToShow[0].rate;
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
    } else {
      window.alert('perdu');
      setTurn(0);
      shuffle();
    }
    console.log(answer);
  }
  return (
    <>
      <h1>win streak </h1>
      <div>{dataToShow && dataToShow.map((filmData) => {
        return (
          <div key={filmData.id}>
            <button onClick={() => gameLoop(filmData.rate)}>{filmData.title} {filmData.rate}</button>
          </div>
        )
      })}
        {/* <button onClick={gameLoop}></button> */}
      </div> 

    </>
  )
}

export default GameHandler;
