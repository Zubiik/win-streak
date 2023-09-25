import styled from "@emotion/styled";

export const Container = styled.div`
  all: unset;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  display: flex;
  align-self: center;
`;
export const SectionContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const QuestionsContainer = styled.aside`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionCustom = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  background-image: linear-gradient(to right,#e052a0,#f15c41);
  border-radius: 3px;
  padding: 16px 18px 15px;
  white-space: nowrap;

  :hover {
      background-color: #e6375a;
      background-image: none!important;
  }

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
  margin: 2rem;
`;
export const Score = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin: 1rem;

`;export const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;

`;