import { useState,useEffect,useRef } from 'react'
import GetPopularFilms from '../../api_requests/GetPopularFilms';
import GetPopularSeries from '../../api_requests/GetPopularSeries';
import GetArtists from '../../api_requests/GETartists';

const GameHandler = () => {
  const [gameData, setGameData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    GetPopularFilms(setGameData);
   // console.log(GetPopularSeries(setGameData));
    GetArtists();
  }, []);
  console.log(gameData);

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
    if (((questions[0].rate < questions[1].rate) && (userChoice === questions[1].rate))
      || ((questions[0].rate > questions[1].rate) && (userChoice === questions[0].rate))) {
      return true;
    }
    return false;
  }

  const gameLoop = (userChoice) => {
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
            <button onClick={() => gameLoop(filmData.rate)}>{filmData.title} // {filmData.rate}</button>
          </div>
        )
      })}
      </div> 

    </>
  )
}

export default GameHandler;

