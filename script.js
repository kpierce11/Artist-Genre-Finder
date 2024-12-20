    let artists = [];
    
  
    // Fetch artist data from db.json
    fetch("http://localhost:3000/artists")
      .then((response) => response.json())
      .then((data) => {
        artists = data;
      })
      .catch((error) => console.error("Error fetching artist data:", error));
  
    // Function to search for the artist and display their info
    function searchAndDisplayArtist() {
      const input = document.getElementById("artistInput").value.trim().toLowerCase();
      const artist = artists.find((artist) => artist.name.toLowerCase() === input);
      const artistInfo = document.getElementById("artistInfo");
      artistInfo.innerHTML = ""; // Clear any previous results
  
      // Validate input: check for empty input
      if (input === "") {
        artistInfo.textContent = "Please enter an artist name.";
        return; // Exit the function if input is empty
      }
  
      // Check for minimum input length
      if (input.length < 2) {
        artistInfo.textContent = "Please enter at least 2 characters.";
        return; // Exit the function if input is too short
      }
  
      // Validate input: check if artist exists
      if (artist) {
        // Display artist info directly within this function
        const artistName = document.createElement("h2");
        artistName.textContent = artist.name;
        artistInfo.appendChild(artistName);
  
        const artistGenre = document.createElement("p");
        artistGenre.textContent = `Genre: ${artist.genre}`;
        artistInfo.appendChild(artistGenre);
  
        const artistHometown = document.createElement("p");
        artistHometown.textContent = `Hometown: ${artist.hometown}`;
        artistInfo.appendChild(artistHometown);
      } else {
        artistInfo.textContent = "Artist not found."; // Artist not found message
      }
    }
  
    // Search Button Click Event
    document.getElementById("searchButton").addEventListener("click", searchAndDisplayArtist);
  
    // Enter Key Listener for the search input field
    document.getElementById("artistInput").addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        searchAndDisplayArtist(); // Trigger search on Enter key
      }
    });
  
    // Dark mode toggle listener
    document.getElementById("darkModeToggle").addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  
    // Function for input field to show matching artist suggestions
    function displayMatchingArtists() {  
      const input = document.getElementById("artistInput").value.trim().toLowerCase();
      const artistInfo = document.getElementById("artistInfo");
      const dropdown = document.getElementById("dropdown");
      dropdown.innerHTML = ""; // Clear previous dropdown results
  
      // If the input is empty, hide the dropdown
      if (input === "") {
        dropdown.style.display = "none"; // Hide the dropdown if input is cleared
        artistInfo.style.marginTop = "20px";
        return;
      }
  
      // Only show dropdown when 2 or more characters are typed
      if (input.length < 2) {
        dropdown.style.display = "none";
        artistInfo.style.marginTop = "20px";
        return;
      }
  
      // Filter artists that match the input
      const matchingArtists = artists.filter((artist) => artist.name.toLowerCase().startsWith(input));
  
      if (matchingArtists.length > 0) {
        dropdown.style.display = "block"; // Show dropdown when there are matches
        matchingArtists.forEach((artist) => {
          const listItem = document.createElement("li");
          listItem.textContent = artist.name;
  
          // Add event listener to fill input when clicking on a dropdown item
          listItem.addEventListener("click", () => {
            document.getElementById("artistInput").value = artist.name; // Fill input with artist name
            dropdown.innerHTML = ""; // Clear dropdown after selection
            dropdown.style.display = "none"; // Hide dropdown after selection
            artistInfo.style.marginTop = "20px"; // Reset margin after selection
          });


  
          dropdown.appendChild(listItem);
        });
  
        // Move artistInfo down when the dropdown is visible
        artistInfo.style.marginTop = `${dropdown.offsetHeight + 10}px`;
      } else {
        dropdown.style.display = "none"; // Hide dropdown when no matches
        artistInfo.style.marginTop = "20px"; // Reset margin when no matches
      }
    }

    
 
  
    // Event listener for input field to show matching artist suggestions
    document.getElementById("artistInput").addEventListener("input", displayMatchingArtists);
  
    // Hide dropdown if clicking outside
    document.addEventListener("click", (event) => {
      const dropdown = document.getElementById("dropdown");
      if (!document.getElementById("artistInput").contains(event.target)) {
        dropdown.innerHTML = ""; // Clear dropdown when clicking outside
        dropdown.style.display = "none"; // Hide dropdown when clicking outside
        document.getElementById("artistInfo").style.marginTop = "20px"; // Reset margin
      }
    });  