const container = document.querySelector(".container");
const button = document.querySelector(".btn");
const adviceId = document.querySelector(".adviceId");
const adviceText = document.querySelector(".adviceText");

const getAdvice = function () {
  fetch(`	https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
      const adviceDataID = data.slip.id;
      const advice = data.slip.advice;

      adviceId.textContent = `ADVICE #${adviceDataID}`;
      adviceText.textContent = `"${advice}"`;
    })
    .catch((err) => console.log(err));
};

document.addEventListener("DOMContentLoaded", getAdvice);
button.addEventListener("click", getAdvice);
