import React, { useState, useEffect } from "react";
import getAll from "../../api_requests/getAll";
import { Container, UserInfo, UserName, UserScore } from "./styled";

const UsersScoreList = () => {
  const [usersInfos, setusersInfos] = useState([]);

  useEffect(() => {
    getAll(setusersInfos);
    console.log(usersInfos);
  }, []);

  return (
    <Container>
      {usersInfos.map((userInfo) => {
        return (
          <UserInfo key={userInfo.id}>
            <UserName>{userInfo.user}</UserName>
            <UserScore>{userInfo.score}</UserScore>
          </UserInfo>
        );
      })}
    </Container>
  );
};
export default UsersScoreList;
