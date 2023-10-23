import React, { useState, useEffect } from "react";
import getAll from "../../api_requests/getAll";
import { Container, UserInfo, UserName, UserScore } from "./styled";

const UsersScoreList = () => {
  const [usersInfos, setusersInfos] = useState([]);

  useEffect(() => {
    getAll(setusersInfos);
  }, []);

  return (
    <Container>
      {usersInfos.map((userInfo) => {
        console.log(userInfo);
        return (
          <UserInfo key={userInfo.id}>
            <UserName>{userInfo.user}</UserName>
            <UserScore>{userInfo.score[1]}</UserScore>
            <UserScore>{userInfo.score[0]}</UserScore>
          </UserInfo>
        );
      })}
    </Container>
  );
};
export default UsersScoreList;
