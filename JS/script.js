const BaseUrl = "https://api.adviceslip.com/advice";

let newQuote = document.querySelector("#quote");
const GenrateBtn = document.querySelector("#generateBtn");
let quoteNumber = document.querySelector("#quoteNo");

GenrateBtn.addEventListener("click", () => {
  let textQuote = '"';
  fetch(BaseUrl)
    .then((data) => data.json())
    .then((item) => {
      newQuote.textContent = textQuote + item.slip.advice + textQuote;
      quoteNumber.textContent = "#" + item.slip.id;
    });
});
