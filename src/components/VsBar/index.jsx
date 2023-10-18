import React, { useState, useEffect } from "react";

import { VerticalBar, BarCustomContainer, VsText } from "./styled";

const VsBar = () => {
  return (
    <BarCustomContainer>
      <VerticalBar />
      <VsText>VS</VsText>
      <VerticalBar />
    </BarCustomContainer>
  );
};
export default VsBar;
