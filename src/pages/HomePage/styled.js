import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  /* background-image: url("../../wallpaper.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const GameSelector = styled.div`
display: flex;
justify-content: space-around;
`;

export const ImgContainer = styled.div`
  display:flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-radius: 1.5rem;
  width : 16rem;
  min-height : 25rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../base.jpg");
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  `;
// export const ImgCustom = styled.img`
//  max-width:100%;
// `;

export const GameTitle = styled.h3`
  color: white;
  font-weight: bold;
  margin:2rem;
  margin-right: 1rem;
`;