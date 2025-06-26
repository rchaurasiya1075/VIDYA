// Shayari list — edit or add more
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

// Total number of uploaded images (rename files as photo1.jpg, photo2.jpg, ...)
const totalImages = 38;

// DOM element to inject images and shayaris
const gallery = document.getElementById("photo-gallery");

// Randomize images order (optional but romantic 😉)
let imageOrder = Array.from({ length: totalImages }, (_, i) => i + 1);
imageOrder = imageOrder.sort(() => Math.random() - 0.5);

// Create images with quotes
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
