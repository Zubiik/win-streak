import styled from "@emotion/styled";

export const QuestionsContainer = styled.aside`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid turquoise;
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
      background-image: none;
  }

`;
export const ResponseCustom = styled.p`
  all: unset;
  font-size: 1.8rem;
  line-height: 2.25rem;
  margin-top: 1rem;
  
`;
export const Circle = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  display: inline-block;
  margin: 2rem;
  object-fit: cover;
`;