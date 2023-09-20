import { useState } from 'react';
import './App.css';
import GameHandler from './components/GameHandler';
import ChooseGame from './pages/ChooseGame';

const App = () => {
  const [gameData, setGameData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  console.log(isTrue);

  return (
    <>
      {isTrue ? <GameHandler setIsTrue={setIsTrue} gameData={gameData} setGameData={setGameData}/> :
      <ChooseGame setIsTrue={setIsTrue} setGameData={setGameData}/>
      }
    </>
  )
}

export default App
