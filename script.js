// script.js — Full Romantic Site with Animation, Login, Music, Shayari and Slideshow

// === CONFIGURATION ===
const quotes = [
  "तेरे बिना अधूरी है ज़िंदगी मेरी 💖",
  "हर पल तेरे ख्यालों में खोया रहता हूँ 🌙",
  "तू मुस्कुराए तो लगे ज़िंदगी हसीन है 😊",
  "तेरी हर बात मुझे खास लगती है 💌",
  "तू पास हो, तो सब कुछ आसान लगता है ❤️",
  "तू है तो मैं हूँ, तू नहीं तो कुछ नहीं 😘",
  "तेरी हँसी ही मेरी सबसे बड़ी दौलत है 💎",
  "तेरे साथ हर लम्हा जादू सा लगता है ✨",
  "तुझसे जुड़ी हर बात मेरे दिल को भा जाती है 🥰",
  "तू ही तो है जिसकी मुझे तलाश थी 💑"
];

const totalImages = 38;

// === LOGIN WITH ROTATING QUESTIONS ===
const loginQuestions = [
  "आपका बचपन का प्यारा नाम क्या था?",
  "हम पहली बार कहाँ मिले थे?",
  "हमारी सालगिरह कब है?",
  "तुम्हारा favourite color क्या है?"
];

function askLogin() {
  const q = loginQuestions[Math.floor(Math.random() * loginQuestions.length)];
  const answer = prompt(q);
  if (!answer || answer.trim().length < 2) {
    alert("सही जवाब दो प्यारी! 💖");
    askLogin();
  } else {
    document.getElementById("main-content").style.display = "block";
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("bg-music").play();
    startGallery();
  }
}

// === CREATE GALLERY ===
function startGallery() {
  const gallery = document.getElementById("photo-gallery");
  let imageOrder = Array.from({ length: totalImages }, (_, i) => i + 1);
  imageOrder = imageOrder.sort(() => Math.random() - 0.5);

  imageOrder.forEach((num, index) => {
    const container = document.createElement("div");
    container.classList.add("photo-container");

    const img = document.createElement("img");
    img.src = `photo/photo${num}.jpg`;
    img.alt = `Photo ${num}`;
    img.classList.add("animated-photo");

    const quote = document.createElement("p");
    quote.className = "photo-quote";
    quote.innerText = quotes[index % quotes.length];

    container.appendChild(img);
    container.appendChild(quote);
    gallery.appendChild(container);
  });
}

// === EVENT ===
window.onload = function () {
  askLogin();
};
