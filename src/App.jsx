import React, { useState } from "react";
import "./App.css";
// eslint-disable-next-line import/extensions
import GameHandler from "./components/GameHandler/index.jsx";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Navbar from "./components/Header";

const App = () => {
  const [gameData, setGameData] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [gameTheme, setGameTheme] = useState();

  return (
    <div>
      <Navbar />
      {isStarted ? (
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
      )}
    </div>
  );
};

export default App;
