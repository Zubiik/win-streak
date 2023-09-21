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
`;
export const QuestionsContainer = styled.aside`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionCustom = styled.button`
  background-color: #3DD1E7;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:focus {
    outline: 0;
  }
  &:after {
    content: '';
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }
  &:hover:after {
    bottom: 2px;
    left: 2px;
  }
  @media (min-width: 768px) {
    padding: .75rem 3rem;
    font-size: 1.25rem;
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


 export const Arrow = styled.div`

`;
