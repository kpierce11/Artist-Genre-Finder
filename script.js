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
  
    // Function to search for the artist and display their info
    function searchAndDisplayArtist() {
      const input = document.getElementById('artistInput').value.toLowerCase();
      const artist = artists.find(artist => artist.name.toLowerCase() === input);
      const artistInfo = document.getElementById('artistInfo');
      artistInfo.innerHTML = ''; // Clear any previous results

      if (artist) {
        // Display artist info directly within this function
        const artistName = document.createElement('h2');
        artistName.textContent = artist.name;
        artistInfo.appendChild(artistName);

        const artistGenre = document.createElement('p');
        artistGenre.textContent = `Genre: ${artist.genre}`;
        artistInfo.appendChild(artistGenre);

        const artistHometown = document.createElement('p');
        artistHometown.textContent = `Hometown: ${artist.hometown}`;
        artistInfo.appendChild(artistHometown);
      } else {
        artistInfo.textContent = 'Artist not found.'; // Artist not found message
      }
      console.log('User searched for:', input);
    }
  
    // Search Button Click Event 
    document.getElementById('searchButton').addEventListener('click', searchAndDisplayArtist);

    // Enter Key Listener for the search input field
    document.getElementById('artistInput').addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        searchAndDisplayArtist(); // Trigger search on Enter key
      }
    });

  });

  // Dark mode toggle listener
  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });