import { useState,useEffect } from 'react'
import GetPopularFilms from '../../api_requests/GetPopularFilms';

const GameHandler = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    GetPopularFilms(setData);
  }, [])


  const gameLoop = () => {
    console.log(data.length);
    console.log('count',count);
    if (count < data.length -1) { 
      setCount(count + 1);
      setDataToShow([]);
      dataToShow.push(data[count].title, data[count + 1].title);
      console.log(dataToShow);
    }
    // faire un else apres avec redirection fin de game 
  }

  return (
    <>
      <h1>win streak </h1>
      <div>{dataToShow && dataToShow.map((filmData) => {
        return (
          <div key={filmData}>{filmData}</div>
        )
      })}</div> 
      <button onClick={gameLoop}></button>
    </>
  )
}

export default GameHandler;
