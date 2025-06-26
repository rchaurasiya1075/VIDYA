// script.js

const slider = document.querySelector('.slider');
const quoteBox = document.querySelector('.quote-box');

const quotes = [
  "Tum mere ho, isse bada sukoon kya hoga 💖",
  "Pyaar wahi jo har din naye tareeke se mehsoos ho ❤️",
  "Main har dua mein bas tumhara naam leta hoon 🙏",
  "Tere bina zindagi adhuri si lagti hai 🌙",
  "Aankhon mein basa rakha hai tumhein... har pal 💫"
];

let currentIndex = 0;

function loadImages() {
  for (let i = 1; i <= 38; i++) {
    const img = document.createElement('img');
    img.src = `photo/photo${i}.jpg`;
    img.alt = `Photo ${i}`;
    slider.appendChild(img);
  }
}

function changeSlide() {
  const width = slider.clientWidth;
  currentIndex = (currentIndex + 1) % 38;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.innerText = quote;
}

window.onload = function () {
  loadImages();
  setInterval(changeSlide, 5000); // Change every 5 seconds
};
