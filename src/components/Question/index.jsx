import { Circle, QuestionsContainer, ResponseCustom,QuestionCustom } from './styled.js';

const Question = ({gameInfo, gameLoop, rightAnswer, index}) => {
  return (
    <QuestionsContainer key={gameInfo.id}>
      <Circle src={gameInfo.url} />
      {/* Renommer QuestionCustom */}
      <QuestionCustom onClick={() => gameLoop(gameInfo.rate)}>{gameInfo.title} </QuestionCustom>
      {rightAnswer && index === 1 && <ResponseCustom>{gameInfo.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</ResponseCustom>}
      <ResponseCustom>{index === 0 && gameInfo.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </ResponseCustom>
    </QuestionsContainer>
  );
}
export default Question;