// Ensure the DOM is fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', () => {

    // Fetch artist data from db.json
    fetch('http://localhost:3000/artists')
      .then(response => response.json())
      .then(artists => {
        console.log('Fetched artist data:', artists); // Log fetched data to verify
      })
      .catch(error => console.error('Error fetching artist data:', error));
  
    // Search Button Click Event - Logs search input for now
    document.getElementById('searchButton').addEventListener('click', () => {
      const input = document.getElementById('artistInput').value;
      const artist = artists.find(artist => artist.name === input);
      const artistInfo = document.getElementById('artistInfo');
      console.log('User searched for:', input);
    });
  });
  
    // Initial event listener for dark mode toggle (no functionality yet)
    document.getElementById('darkModeToggle').addEventListener('click', () => {
      console.log('Dark mode toggled');
    });
  
    // Initial event listener for Enter key in the search input field (no functionality yet)
    document.getElementById('artistInput').addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        console.log('Enter key pressed');
      }
    });