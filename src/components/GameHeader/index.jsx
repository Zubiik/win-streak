import { Title, ScoreContainer, Score} from './styled.js';
const GameHeader = ({ gameTheme,score,userScore }) => {
  return (
    <>
    <Title>{gameTheme}</Title>
    <ScoreContainer>
     <Score>score: {score} </Score>
     <Score>record:{userScore} </Score>
    </ScoreContainer>
    </>
  );
}

export default GameHeader;