


// Fetch data from NASA APOD API
fetch("https://idyllic-dodol-be9a1c.netlify.app/.netlify/functions/apodAPI") // Let's fetch multiple images
  .then(response => response.json())
  .then(data => {
    const apodContainer = document.getElementById("apodContainer");

    // Map over the data and create elements for each item
    data.map(item => {
      const apodItem = document.createElement("div");
      apodItem.classList.add("apodItem");

      const img = document.createElement("img");
      img.src = item.url;
      img.alt = "NASA APOD";
      img.onload = () => {
        img.style.display = "block"; // Show the image after it's loaded
      };

      const title = document.createElement("h2");
      title.textContent = item.title;

      apodItem.appendChild(img);
      apodItem.appendChild(title);

      apodContainer.appendChild(apodItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
