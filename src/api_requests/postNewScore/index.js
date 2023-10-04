const postNewScore = () => {
  fetch(`http://localhost:3001/api/post`, {
    method: "POST",
    body: JSON.stringify({ user: "ceci est un test", score: 10 }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export default postNewScore;
