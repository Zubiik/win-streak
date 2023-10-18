import styled from "@emotion/styled";

export const QuestionsContainer = styled.aside`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 550px;
  @media (max-width: 768px) {
    min-height: 400px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  padding: 16px 18px 15px;
  margin: 1rem;
  white-space: nowrap;
`;
export const LessButton = styled(Button)`
  background-color: #3323a5;
  :hover {
    background-color: #1b0f6a;
  }
`;
export const MoreButton = styled(Button)`
  background-color: #db162f;
  :hover {
    background-color: #871624;
  }
`;
export const Title = styled.p`
  all: unset;
  font-size: 1.8rem;
  line-height: 2.25rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
export const Circle = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  display: inline-block;
  margin: 2rem;
  object-fit: cover;
`;
