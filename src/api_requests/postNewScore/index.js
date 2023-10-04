const postNewScore = (user, score) => {
  fetch(`http://localhost:3001/api/post`, {
    method: "POST",
    body: JSON.stringify({ user: user, score: score }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export default postNewScore;
