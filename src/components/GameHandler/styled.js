import styled from "@emotion/styled";

export const Container = styled.div`
  all: unset;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const SectionContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionCustom = styled.button`
  all: unset;
  font-size: 1.8rem;
  line-height: 2.25rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-weight: 500;
  font-family: inherit;
  background-color: pink;
  cursor: pointer;
  transition: border-color 0.25s;

`;
export const ResponseCustom = styled.p`
  all: unset;
  font-size: 1.8rem;
  line-height: 2.25rem;
`;
export const Circle = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  display: inline-block;
  margin: 1rem;
`;