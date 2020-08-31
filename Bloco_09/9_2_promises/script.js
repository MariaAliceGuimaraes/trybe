const fetch = require("node-fetch");

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const appendJoke = (joke) => {
    let ul = document.querySelector("ul")
    let li = document.createElement("li")
    li.innerHTML = joke
    ul.appendChild(li)
  }
  
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const joke = data.results[0].joke;
      appendJoke(joke);
    })
};

// window.onload = () => fetchJoke();
fetchJoke();