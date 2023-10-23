import { React, useState } from "react";
import postNewScore from "../../api_requests/postNewScore";
import { Form, Input, Button } from "./styled";

const GameScoreForm = ({ gameTheme }) => {
  const [userValue, setUserValue] = useState("");
  const userScore = JSON.parse(localStorage.getItem(gameTheme));

  const onSubmit = (e) => {
    e.preventDefault();
    postNewScore(userValue, userScore);
    setUserValue("");
  };
  return (
    <Form>
      <h2>Partager votre score !</h2>
      <span>votre nom</span>
      <Input
        name="user"
        id="user"
        label="user"
        value={userValue}
        onChange={(event) => {
          setUserValue(event.target.value);
        }}
      />
      {/* <Input
        label="score"
        value={scoreValue}
        onChange={(event) => {
          setScoreValue(event.target.value);
        }}
      /> */}
      <div> votre score : {userScore[0]}</div>
      <Button type="submit" onClick={(e) => onSubmit(e)}>
        Envoyer
      </Button>
    </Form>
  );
};
export default GameScoreForm;
