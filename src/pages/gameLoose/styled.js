import styled from "@emotion/styled";

export const GameLooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

export const Score = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 20px;
`;

export const RetryButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  background-image: linear-gradient(to right, #e052a0, #f15c41);
  border-radius: 3px;
  padding: 16px 18px 15px;
  white-space: nowrap;

  :hover {
    background-color: #e6375a;
    background-image: none !important;
  }
`;
