// Sample list of songs for each emotion
const songs = {
  happy: [
    "Happy Song 1",
    "Happy Song 2",
    "Happy Song 3",
    "Happy Song 4",
    "Happy Song 5",
  ],
  sad: ["Sad Song 1", "Sad Song 2", "Sad Song 3", "Sad Song 5", "Sad Song 5"],
  calm: [
    "Calm Song 1",
    "Calm Song 2",
    "Calm Song 3",
    "Calm Song 4",
    "Calm Song 5",
  ],
  energetic: [
    "Energetic Song 1",
    "Energetic Song 2",
    "Energetic Song 3",
    "Energetic Song 4",
    "Energetic Song 5",
  ],
  hopeful: [
    "Hopeful Song 1",
    "Hopeful Song 2",
    "Hopeful Song 3",
    "Hopeful Song 4",
    "Hopeful Song 5",
  ],
};

// Function to handle emoji click and update the song suggestion
document.querySelectorAll(".emoji").forEach((emoji) => {
  emoji.addEventListener("click", () => {
    // Remove 'selected' class from all emojis
    document
      .querySelectorAll(".emoji")
      .forEach((e) => e.classList.remove("selected"));

    // Add 'selected' class to the clicked emoji
    emoji.classList.add("selected");

    const emotion = emoji.getAttribute("data-emotion");
    showSongSuggestion(emotion);
  });
});

// Function to display the song suggestion and show the "Listen Now" button
function showSongSuggestion(emotion) {
  const songList = songs[emotion];
  const randomSong = songList[Math.floor(Math.random() * songList.length)];

  // Display song suggestion message
  const songNameElement = document.getElementById("song-name");
  songNameElement.innerHTML = ` Here is a song for you: 🎶 ${randomSong} 🎶`;

  // Show the "Listen Now" button and start blinking
  const listenButton = document.getElementById("listen-now");
  listenButton.style.display = "inline-block";

  // Start blinking effect on button as soon as an emoji is clicked
  listenButton.classList.remove("clicked");
  listenButton.classList.add("clicked");

  // Hide instructions after selection
  const instructions = document.getElementById("instructions");
  instructions.classList.add("hidden");

  // Prepare YouTube player but keep it hidden until "Listen Now" is clicked
  const youtubePlayer = document.getElementById("youtube-player");
  youtubePlayer.style.display = "none"; // Keep hidden initially
}

// Add event listener to "Listen Now" button to show YouTube video
document.getElementById("listen-now").addEventListener("click", () => {
  const youtubePlayer = document.getElementById("youtube-player");
  youtubePlayer.style.display = "block"; // Show YouTube player when "Listen Now" is clicked

  // Embed a YouTube video based on the emotion (placeholder link)
  const iframe = document.createElement("iframe");
  iframe.src = "https://youtu.be/md3Ef1EdH18?si=ZYE1eEwzH6JBoLxJ"; // Change this link dynamically if needed
  iframe.frameborder = "0";
  youtubePlayer.innerHTML = "";
  youtubePlayer.appendChild(iframe);
});

// JavaScript to manage the blinking of the Listen Now button
document.addEventListener("DOMContentLoaded", function () {
  const listenNowButton = document.getElementById("listen-now");
  const emojiContainer = document.getElementById("emoji-container");

  // Stop blinking when clicked
  listenNowButton.addEventListener("click", function () {
    listenNowButton.classList.add("clicked");
  });

  // Restart blinking when emotion is changed
  emojiContainer.addEventListener("click", function () {
    listenNowButton.classList.remove("clicked");
    // Restart the blinking animation by forcing a reflow
    void listenNowButton.offsetWidth; // Trigger reflow to reset animation
    listenNowButton.classList.add("blink");
  });
});
