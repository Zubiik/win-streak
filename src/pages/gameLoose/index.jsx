const GameLoose = ({userScore,setIsLoose}) => {
 
  return (
    <>
      Perdu ! 
      <p> Score : {userScore}</p>
      <button onClick={() => setIsLoose(false)}>Réssayer</button>
    </>
  )
}

export default GameLoose;
