import { useState } from 'react';
import './App.css';
import GameHandler from './components/GameHandler';
import HomePage from './pages/HomePage';

const App = () => {
  const [gameData, setGameData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [gameTheme, setGameTheme] = useState();
  
  return (
    <>
      {isTrue ? <GameHandler setIsTrue={setIsTrue} gameData={gameData} setGameData={setGameData} gameTheme={gameTheme} /> :
        <HomePage setIsTrue={setIsTrue} setGameData={setGameData} setGameTheme={setGameTheme} />
      }
    </>
  )
}

export default App
