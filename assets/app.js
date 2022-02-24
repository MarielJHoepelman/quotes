
const fetchAsyncQuotes = async () => {
  try {
    const response = await fetch("https://type.fit/api/quotes")
    return await response.json();
  } catch (error) {
    console.log(error)
  }
}
const quotes = fetchAsyncQuotes(); // returns a promise that need to be either thened or awaited
const btn = document.getElementById("btn");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const randomQuoteGenerator = async () => {
  const result = await quotes;
  const index = Math.floor(Math.random() * result.length);
  const randomQuote = result[index];
  quoteElement.innerHTML = randomQuote.text;
  authorElement.innerHTML = randomQuote.author;
}

document.addEventListener('DOMContentLoaded', randomQuoteGenerator);
btn.addEventListener('click', randomQuoteGenerator);

