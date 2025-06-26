// script.js

const quotes = [
  "तुम मुस्कुराओ यही दुआ है मेरी...",
  "तुम्हारी हँसी मेरा सुकून है 💖",
  "पल-पल तुम्हें देखने की आदत सी हो गई है...",
  "तुम्हारे बिना दिल नहीं लगता 💔",
  "तुम साथ हो तो सब कुछ है ✨",
  "तेरा नाम ही काफी है मुस्कराने को 💫",
  "तेरी हर बात मेरे दिल को छू जाती है... 💌",
  "तू दिख जाए बस वही काफी है इस दिल के लिए... 💕",
  "तू है तो मेरी दुनिया पूरी है 🌍",
  "तू ही है जो मेरी धड़कनों में बसती है..."
];

const slider = document.querySelector('.slider');
const quoteBox = document.querySelector('.quote-box');

let imageCount = 38;
let currentIndex = 0;

function loadImages() {
  for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement('img');
    img.src = `photo/photo${i}.jpg`;
    img.alt = `Photo ${i}`;
    img.style.animation = `floatIn 1s ease forwards`;
    slider.appendChild(img);
  }
}

function updateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteBox.innerText = quotes[random];
}

function startSlider() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageCount;
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    updateQuote();
  }, 4000);
}

// Image Float Animation (Optional Visual Effect)
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatIn {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}`;
document.head.appendChild(style);

window.onload = () => {
  loadImages();
  updateQuote();
  startSlider();
};
