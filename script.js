const CAT_API_KEY = 'YOUR_CAT_API_KEY'; // Replace with your actual Cat API key

document.getElementById('fetch-button').addEventListener('click', fetchCatData);

function fetchCatData() {
    fetchCatImage(); // Fetch a cat image to use as the background
    fetchCatGif();   // Fetch a cat GIF to display in the content area
    fetchCatFact();  // Fetch a cat fact
}

function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search?size=med', { // Fetch a medium-sized cat image
        headers: {
            'x-api-key': CAT_API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        const imageUrl = data[0].url;
        setBackground(imageUrl); // Set the background image to the fetched cat image
    })
    .catch(error => console.error('Error fetching cat image:', error));
}

function fetchCatGif() {
    fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif', { // Fetch a cat GIF
        headers: {
            'x-api-key': CAT_API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        const gifUrl = data[0].url;
        displayCatGif(gifUrl); // Display the cat GIF
    })
    .catch(error => console.error('Error fetching cat GIF:', error));
}

function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
        const catFact = data.fact;
        displayCatFact(catFact); // Display the cat fact
    })
    .catch(error => console.error('Error fetching cat fact:', error));
}

function setBackground(url) {
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundSize = 'cover'; // Ensure background covers the entire viewport
}

function displayCatGif(url) {
    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = ''; // Clear previous GIF

    const catGif = document.createElement('img');
    catGif.src = url;
    catGif.classList.add('cat-gif');

    gifContainer.appendChild(catGif);
}

function displayCatFact(fact) {
    const factContainer = document.getElementById('fact-container');
    factContainer.textContent = fact; // Display the cat fact
}
