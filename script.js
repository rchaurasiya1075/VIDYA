// script.js

// 🌸 Rotating romantic questions for login
const questions = [
  "What was the date of our first call? 📞",
  "What's my favorite nickname for you? 💖",
  "Where did we promise to meet first? 🏞️",
  "How many times do I say 'I love you' in a day? 😘",
  "Which flower do I always send you virtually? 🌹"
];

let qIndex = 0;
function rotateQuestion() {
  const el = document.getElementById('question');
  if (el) {
    el.innerText = questions[qIndex % questions.length];
    qIndex++;
  }
}
setInterval(rotateQuestion, 5000);

// 🌠 Romantic slideshow
const images = [
  "photos/photo1.jpg", "photos/photo2.jpg", "photos/photo3.jpg",
  "photos/photo4.jpg", "photos/photo5.jpg"
  // continue up to photo38.jpg
];

const quotes = [
  "You are my sunshine ☀️",
  "Tere bina zindagi se koi shikwa to nahi... 💖",
  "Every moment with you is a blessing 🌹",
  "Tum ho to har lamha hai pyara 💑",
  "Jab tum saamne hoti ho to duniya ruk jati hai ✨"
  // 38 quotes total
];

let i = 0;
function nextSlide() {
  const photo = document.getElementById("photo");
  const quote = document.getElementById("quote");
  if (photo && quote) {
    i = (i + 1) % images.length;
    photo.src = images[i];
    quote.innerText = quotes[i % quotes.length];
  }
}
setInterval(nextSlide, 4000);
