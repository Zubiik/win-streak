import React from "react";
import {
  ImgContainer,
  GameTitle,
  GameSelector,
  Container,
  Heading,
  SubHeading,
} from "./styled";
import { artistsData } from "../../mocked__data/artistsData";
import { filmsData } from "../../mocked__data/filmsData";
import { cheeseData } from "../../mocked__data/cheeseData";

const HomePage = ({ setIsTrue, setGameData, setGameTheme }) => {
  return (
    <Container>
      <Heading>Win streak challenge</Heading>
      <SubHeading>Arriverez-vous à faire un sans faute ?</SubHeading>
      <GameSelector>
        <ImgContainer
          onClick={() => {
            setIsTrue(true);
            setGameData(artistsData);
            setGameTheme("L'artiste le plus ecouté");
          }}
        >
          <GameTitle>l'artiste le plus ecouté</GameTitle>
        </ImgContainer>
        <ImgContainer
          onClick={() => {
            setIsTrue(true);
            setGameData(filmsData);
            setGameTheme("Le film le mieux noté");
          }}
        >
          <GameTitle>le film le mieux noté</GameTitle>
        </ImgContainer>
        <ImgContainer
          onClick={() => {
            setIsTrue(true);
            setGameData(cheeseData);
            setGameTheme("Le meilleur fromage");
          }}
        >
          <GameTitle>le meilleur fromage</GameTitle>
        </ImgContainer>
      </GameSelector>
    </Container>
  );
};

export default HomePage;
