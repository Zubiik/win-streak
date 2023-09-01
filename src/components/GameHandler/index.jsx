import { useState,useEffect } from 'react'
import GetPopularFilms from '../../api_requests/GetPopularFilms';

const GameHandler = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    GetPopularFilms(setData);
  }, []);

  useEffect(() => {
    gameLoop();
  }, [data]);

  const winCount = (gamerResult, resultToCompare) => {
    console.log('gamerResult ->',gamerResult,'resultToCompare ->', resultToCompare );
    if (gamerResult > resultToCompare) {
      console.log('gamerResult win ',gamerResult);
    } else {
      console.log('resultToCompare loose',resultToCompare);

    }
  }
  const gameLoop = (rate) => {
    
    if (count < data.length - 1) {
      console.log([data[count], data[count + 1]]);
      if (rate) {
        winCount(rate,data[count + 1].vote_average)
      } 
      setCount(count + 1);
      setDataToShow([]);
      setDataToShow([data[count], data[count + 1]]);
    }
   
    // faire un else apres avec redirection fin de game 
  };


  return (
    <>
      <h1>win streak </h1>
      <div>{dataToShow && dataToShow.map((filmData) => {
        return (
          <div key={filmData.id}>
            <button onClick={() => gameLoop(filmData.vote_average)}>{filmData.title} {filmData.vote_average}</button>
          </div>
        )
      })}
        {/* <button onClick={gameLoop}></button> */}
      </div> 

    </>
  )
}

export default GameHandler;
