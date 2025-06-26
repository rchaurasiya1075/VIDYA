const imageContainer = document.getElementById("image-container");
const quoteText = document.getElementById("quote");

// Total image count
const totalImages = 38;

// Quotes/Shayari List
const quotes = [
  "तू मेरी धड़कनों में इस तरह बसी है, जैसे खुदा हर जगह हो।",
  "हर सुबह तुम्हारा चेहरा देखना एक दुआ जैसा लगता है।",
  "तेरे बिना अधूरा हूँ मैं, जैसे गीत बिना सुर के।",
  "पलकों पर तेरा नाम है, दिल में तेरा पैगाम है।",
  "तू मेरी कहानी है, जो हर दिन मैं दोहराना चाहता हूँ।",
  "तेरी मुस्कान ही मेरी दुनिया है।",
  "तू है तो सब कुछ है, तू नहीं तो कुछ भी नहीं।",
  "हर तस्वीर में बस तू ही नजर आती है।"
];

// Random index
let currentIndex = Math.floor(Math.random() * totalImages);
let quoteIndex = Math.floor(Math.random() * quotes.length);

// Load initial image & quote
function loadImage() {
  const img = document.createElement("img");
  img.src = `photoes/photo${currentIndex + 1}.jpg`;
  img.className = "fade";
  imageContainer.innerHTML = ""; // Clear previous image
  imageContainer.appendChild(img);

  quoteText.innerText = quotes[quoteIndex];

  // Randomize for next round
  currentIndex = (currentIndex + 1) % totalImages;
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

// Change image every 5 seconds
setInterval(loadImage, 5000);
window.onload = loadImage;
