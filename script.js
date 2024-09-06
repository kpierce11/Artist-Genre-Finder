// Ensure the DOM is fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', () => {
  
    // Initial event listener for search button click (no functionality yet)
    document.getElementById('searchButton').addEventListener('click', () => {
      console.log('Search button clicked');
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
  });