import React from "react";
import { Header, GameTitle, ProfileLink } from "./styled";

const Navbar = () => {
  return (
    <Header>
      <GameTitle>Win streak</GameTitle>
      {/* <ProfileLink href="/profil">Mon Profil</ProfileLink> */}
    </Header>
  );
};

export default Navbar;
