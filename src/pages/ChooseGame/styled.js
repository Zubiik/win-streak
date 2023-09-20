import styled from "@emotion/styled";

export const GameSelector = styled.div`
display: flex;
justify-content: space-around;
border: 1px solid pink;
`;

export const ImgContainer = styled.div`
  display:flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-radius: 1.5rem;
  width : 20rem;
  min-height : 30rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../base.jpg");
`;
// export const ImgCustom = styled.img`
//  max-width:100%;
// `;

export const GameTitle = styled.h3`
  color: white;
  font-weight: bold;
  margin: 3rem;
  border:1px blue solid;
`;