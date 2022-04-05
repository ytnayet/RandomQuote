// Project Built With Tanya, Zeriune, Yetnayet and ???? 

let quote = document.querySelector("#quote");
let button = document.querySelector("#btne");
let authorName = document.querySelector("#authorName");
getQuote();

async function getQuote() {
  let res = await fetch("https://type.fit/api/quotes");
  let data = await res.json();

  let getRandomQuote = Math.floor(Math.random() * data.length);
  if (data[getRandomQuote].author == null) {
    authorName.innerHTML = "Unknown";
  } else {
    authorName.innerHTML = data[getRandomQuote].author;
  }
  quote.innerHTML = `${data[getRandomQuote].text}`;
}

btne.addEventListener("click", getQuote);
