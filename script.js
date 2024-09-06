document.addEventListener('DOMContentLoaded', () => {

    let artists = [];

    // Fetch artist data from db.json
    fetch('http://localhost:3000/artists')
      .then(response => response.json())
      .then(data => {
        artists = data;
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
    }

    // Search Button Click Event 
    document.getElementById('searchButton').addEventListener('click', searchAndDisplayArtist);

    // Enter Key Listener for the search input field
    document.getElementById('artistInput').addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        searchAndDisplayArtist(); // Trigger search on Enter key
      }
    });

    // Dark mode toggle listener
    document.getElementById('darkModeToggle').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });

    // Create dropdown list to show matching artists
    const dropdown = document.createElement('ul');
    dropdown.id = 'dropdown';
    document.getElementById('artistInput').parentNode.appendChild(dropdown);
       // Event listener for input field to show matching artist suggestions
       document.getElementById('artistInput').addEventListener('input', () => {
        const input = document.getElementById('artistInput').value.toLowerCase();
        dropdown.innerHTML = ''; // Clear previous dropdown results

          // If the input is empty, hide the dropdown
      if (input === '') {
        dropdown.style.display = 'none'; // Hide the dropdown if input is cleared
        return;
      }
  
        // Filter artists that match the input
        const matchingArtists = artists.filter(artist => artist.name.toLowerCase().startsWith(input));
  
        if (matchingArtists.length > 0) {
          dropdown.style.display = 'block'; // Show dropdown when there are matches
          matchingArtists.forEach(artist => {
            const listItem = document.createElement('li');
            listItem.textContent = artist.name;
  
            // Add event listener to fill input when clicking on a dropdown item
            listItem.addEventListener('click', () => {
              document.getElementById('artistInput').value = artist.name; // Fill input with artist name
              dropdown.innerHTML = ''; // Clear dropdown after selection
              dropdown.style.display = 'none'; // Hide dropdown after selection
            });
  
            dropdown.appendChild(listItem);
          });
        } else {
          dropdown.style.display = 'none'; // Hide dropdown when no matches
        }
      });
  
      // Hide dropdown if clicking outside
      document.addEventListener('click', (event) => {
        if (!document.getElementById('artistInput').contains(event.target)) {
          dropdown.innerHTML = ''; // Clear dropdown when clicking outside
          dropdown.style.display = 'none'; // Hide dropdown when clicking outside
        }
      });
  });