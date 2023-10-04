import React from "react";

const GameWin = () => {
  return (
    <>
      <h2>hello winner</h2>
      <img src="../../winner.png" alt="winner" />
      <div> Partager mon score</div>
      <form>
        <input label="name" />
        <input label="score" />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

export default GameWin;
