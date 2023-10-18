import React from "react";
import {
  Circle,
  QuestionsContainer,
  Title,
  LessButton,
  MoreButton,
} from "./styled";

const Question = ({ gameInfo, rightAnswer, index, isMore, isLess }) => {
  return (
    <QuestionsContainer>
      <Circle src={gameInfo.url} />

      <Title>{gameInfo.title}</Title>
      {index === 1 ? (
        <div>
          {/* Renommer QuestionCustom */}
          <MoreButton onClick={() => isMore(gameInfo.rate)}> ↑ More</MoreButton>
          <LessButton onClick={() => isLess(gameInfo.rate)}> ↓ Less</LessButton>
        </div>
      ) : null}

      {rightAnswer && index === 1 && (
        <Title>
          {gameInfo.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Title>
      )}
      <Title>
        {index === 0 &&
          gameInfo.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
      </Title>
    </QuestionsContainer>
  );
};
export default Question;
