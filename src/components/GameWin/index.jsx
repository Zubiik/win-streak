import React, { useState } from "react";
import postNewScore from "../../api_requests/postNewScore";

const GameWin = () => {
  const [userValue, setUserValue] = useState("");
  const [scoreValue, setScoreValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    postNewScore(userValue, scoreValue);
    setUserValue("");
    setScoreValue("");
  };
  return (
    <>
      <h2>hello winner</h2>
      {/* <img src="../../winner.png" alt="winner" /> */}
      <div> Partager mon score</div>
      <form>
        <input
          label="user"
          value={userValue}
          onChange={(event) => {
            setUserValue(event.target.value);
          }}
        />
        <input
          label="score"
          value={scoreValue}
          onChange={(event) => {
            setScoreValue(event.target.value);
          }}
        />
        <button type="submit" onClick={(e) => onSubmit(e)}>
          Envoyer
        </button>
      </form>
    </>
  );
};

export default GameWin;
