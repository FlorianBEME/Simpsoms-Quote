function fetchSimpsomJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .then(function (simpsoms) {
      console.log("data decoded from JSON:", simpsoms);

      const simpsomsHtml = `
    <p><strong>${simpsoms[0].character}</strong></p>
    <img src="${simpsoms[0].image}" />
    <p>${simpsoms[0].quote}</p>
  `;
      document.querySelector("#simpsom").innerHTML = simpsomsHtml;
    });
}
function reLoad() {
  fetchSimpsomJSON();
}

fetchSimpsomJSON();
