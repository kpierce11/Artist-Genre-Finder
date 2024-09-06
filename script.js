// Ensure the DOM is fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', () => {
  
  // Search Button Click Event - Logs search input for now
   document.getElementById('searchButton').addEventListener('click', () => {
    const input = document.getElementById('artistInput').value;
    console.log('User searched for:', input); // Logs what the user typed in the search field
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