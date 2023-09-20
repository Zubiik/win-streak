import { useState,useEffect,useRef } from 'react'
import { artistsData } from '../../mocked__data/artistsData';
const GameHandler = () => {
  const [gameData, setGameData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    setGameData(artistsData);
  }, []);

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
      <h2>Quel est l'artiste le plus ecouté ?</h2>
      <div>
        {
          turn === gameData.length - 1 ? <> <h2>hello winner</h2><img src='../../winner.png'/></>
            : questions && questions.map((artistData) => {
            console.log('artistData',artistData);
        return (
          <div key={artistData.name}>
            <button onClick={() => gameLoop(artistData.followers.total)}>{artistData.name} // {artistData.followers.total}</button>
          </div>
        )
      })}
      </div> 

    </>
  )
}

export default GameHandler;

