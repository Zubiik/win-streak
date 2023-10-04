import { React, useState } from "react";
import postNewScore from "../../api_requests/postNewScore";
import { Form, Input, Button } from "./styled";

const GameScoreForm = () => {
  const [userValue, setUserValue] = useState("");
  const [scoreValue, setScoreValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    postNewScore(userValue, scoreValue);
    setUserValue("");
    setScoreValue("");
  };
  return (
    <Form>
      <Input
        label="user"
        value={userValue}
        onChange={(event) => {
          setUserValue(event.target.value);
        }}
      />
      <Input
        label="score"
        value={scoreValue}
        onChange={(event) => {
          setScoreValue(event.target.value);
        }}
      />
      <Button type="submit" onClick={(e) => onSubmit(e)}>
        Envoyer
      </Button>
    </Form>
  );
};
export default GameScoreForm;
