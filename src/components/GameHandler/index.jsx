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

  const gameLoop = () => {
    console.log(data.length);
    if (count < data.length - 1) {
      setCount(count + 1);
      setDataToShow([]);
      setDataToShow([data[count].title, data[count + 1].title]);
      console.log('dataToShow -->', dataToShow);
    }
    // faire un else apres avec redirection fin de game 
  };

  return (
    <>
      <h1>win streak </h1>
      <div>{dataToShow && dataToShow.map((filmData) => {
        return (
          <div key={filmData}>
            <button onClick={gameLoop}>{filmData}</button>
          </div>
        )
      })}</div> 

    </>
  )
}

export default GameHandler;
