// Ensure the DOM is fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', () => {

    let artists = [];

    // Fetch artist data from db.json
    fetch('http://localhost:3000/artists')
      .then(response => response.json())
      .then(data => {
        artists = data;
        console.log('Fetched artist data:', artists); // Log fetched data to verify
      })
      .catch(error => console.error('Error fetching artist data:', error));
  
    // Search Button Click Event 
    document.getElementById('searchButton').addEventListener('click', () => {
      const input = document.getElementById('artistInput').value.toLowerCase();
      const artist = artists.find(artist => artist.name.toLowerCase() === input);
      const artistInfo = document.getElementById('artistInfo');
      artistInfo.innerHTML = ''; // Clear any previous results

      if (artist) {
        displaySingleArtist(artist); // Artist found, display info
      } else {
          artistInfo.textContent = 'Artist not found'; // Artist not found
      }
      console.log('User searched for:', input);
    });
  });

  // Function to display artist info
  function displaySingleArtist(artist) {
    const artistInfo = document.getElementById('artistInfo');

    const artistName = document.createElement('h2');
    artistName.textContent = artist.name;
    artistInfo.appendChild(artistName);

    const artistGenre = document.createElement('p');
    artistGenre.textContent = `Genre: ${artist.genre}`;
    artistInfo.appendChild(artistGenre);

    const artistHometown = document.createElement('p');
    artistHometown.textContent = `Hometown: ${artist.hometown}`;
    artistInfo.appendChild(artistHometown);
  }
  
    // Initial event listener for dark mode toggle (no functionality yet)
    document.getElementById('darkModeToggle').addEventListener('click', () => {
      console.log('Dark mode toggled');
    });
  
    // Initial event listener for Enter key in the search input field 
    document.getElementById('artistInput').addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
      }
    });