import styled from "@emotion/styled";

export const MiniatureContainer = styled.div`
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  flex-direction: column;
  width: 24rem;
  &:hover {
    transform: scale(1.05);
  }
  margin: 1rem;
`;
export const GameImg = styled.img`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  min-height: 25rem;
  object-fit: cover;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
`;
export const GameTitleText = styled.h3`
  padding-left: 1rem;
`;
