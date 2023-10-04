import React, { useState } from "react";
import "./App.css";
import GameHandler from "./components/GameHandler";
import HomePage from "./pages/HomePage";
import UsersScoreList from "./components/UsersScoreList";
import GameScoreForm from "./components/GameScoreForm";

const App = () => {
  const [gameData, setGameData] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [gameTheme, setGameTheme] = useState();

  return (
    <div>
      {/* {isStarted ? (
        <GameHandler
          setIsStarted={setIsStarted}
          gameData={gameData}
          setGameData={setGameData}
          gameTheme={gameTheme}
        />
      ) : (
        <HomePage
          setIsStarted={setIsStarted}
          setGameData={setGameData}
          setGameTheme={setGameTheme}
        />
      )} */}
      <UsersScoreList />
      <GameScoreForm />
    </div>
  );
};

export default App;
