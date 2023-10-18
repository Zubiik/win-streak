import styled from "@emotion/styled";

export const VerticalBar = styled.div`
  width: 5px;
  height: 50vh;
  background-color: grey;
`;

export const VsText = styled.p`
  text-align: center;
  font-size: 24px;
`;

export const BarCustomContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
