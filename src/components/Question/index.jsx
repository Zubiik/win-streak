import React from "react";
import {
  Circle,
  QuestionsContainer,
  ResponseCustom,
  QuestionCustom,
} from "./styled";

const Question = ({ gameInfo, rightAnswer, index, isMore, isLess }) => {
  return (
    <QuestionsContainer>
      <Circle src={gameInfo.url} />

      <div>{gameInfo.title}</div>
      {index === 1 ? (
        <div>
          {/* Renommer QuestionCustom */}
          <QuestionCustom onClick={() => isMore(gameInfo.rate)}>
            More
          </QuestionCustom>
          <QuestionCustom onClick={() => isLess(gameInfo.rate)}>
            Less
          </QuestionCustom>
        </div>
      ) : null}

      {rightAnswer && index === 1 && (
        <ResponseCustom>
          {gameInfo.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </ResponseCustom>
      )}
      <ResponseCustom>
        {index === 0 &&
          gameInfo.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
      </ResponseCustom>
    </QuestionsContainer>
  );
};
export default Question;
