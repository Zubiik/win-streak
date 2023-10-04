const getAll = (setAllScore) => {
  fetch(`http://localhost:3001/api/getAll`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((response) => setAllScore(response))
    .catch((err) => console.error(err));
};

export default getAll;
