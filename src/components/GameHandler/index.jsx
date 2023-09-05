import { useState,useEffect,useRef } from 'react'
import GetPopularFilms from '../../api_requests/GetPopularFilms';

const GameHandler = () => {
  const [gameData, setGameData] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);
  const turn = useRef(0);


  useEffect(() => {
    GetPopularFilms(setGameData);
  }, []);

  useEffect(() => {
    if (gameData.length !== 0 ) {
      initQuestions();
    }
  }, [gameData])
  
  const isRightAnswer = (userChoice) => {
    let rightAnswer;
    console.log('before crash', turn.current);
    console.log(dataToShow);
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

  const initQuestions = () => {
    console.log('turn --> ',turn.current);
    setDataToShow([gameData[turn.current], gameData[turn.current+ 1]]);
    turn.current += 1;

  }
  
  const gameLoop = (userChoice) => {
    const answer = isRightAnswer(userChoice);
    if (answer === true) {
      initQuestions();

    } else {
      console.log('perdu');
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
