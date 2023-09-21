import { useState } from 'react';
import './App.css';
import GameHandler from './components/GameHandler';
import HomePage from './pages/HomePage';

const App = () => {
  const [gameData, setGameData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);

  return (
    <>
      {isTrue ? <GameHandler setIsTrue={setIsTrue} gameData={gameData} setGameData={setGameData}/> :
      <HomePage setIsTrue={setIsTrue} setGameData={setGameData}/>
      }
    </>
  )
}

export default App
