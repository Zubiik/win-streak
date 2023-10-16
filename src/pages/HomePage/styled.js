import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
`;

export const GameSelector = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-radius: 1.5rem;
  width: 16rem;
  min-height: 25rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../base.jpg");
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const GameTitle = styled.h3`
  color: white;
  font-weight: bold;
  margin: 2rem;
  margin-right: 1rem;
`;
