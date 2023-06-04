let button = document.getElementById("my-button");
button.addEventListener("click", function() {
    button.style.background = "pink";
});

const tracklistTitle = document.querySelector('.tracklist-title');
const songTitles = document.querySelectorAll('.song-title');
let currentIndex = 0;

function rotateSongs() {
  tracklistTitle.style.display = 'inline-block';
  songTitles.forEach((title, index) => {
    if (index === currentIndex) {
      title.style.display = 'inline-block';
    } else {
      title.style.display = 'none';
    }
  });

  currentIndex++;
  if (currentIndex === songTitles.length) {
    currentIndex = 0;
  }

  setTimeout(rotateSongs, 2000); // Changez 2000 pour définir la durée de chaque titre de chanson (en millisecondes)
}

rotateSongs();

