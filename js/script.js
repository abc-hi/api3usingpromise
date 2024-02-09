// Function to load an image using a Promise
function loadImage(url) {
    return new Promise((resolve, reject) => {
      // Create a new Image object
      const img = new Image();
  
      // Event handler for successful image loading
      img.onload = () => resolve(img);
  
      // Event handler for image loading errors
      img.onerror = (error) => reject(error);
  
      // Set the image source, triggering the loading process
      img.src = url;
    });
  }
  
  // Example usage
  const imageUrl = 'https://placebear.com/g/200/300';
  
  // Call the loadImage function with the image URL
  loadImage(imageUrl)
    .then(image => {
      // Append the loaded image to the body of the HTML document
      document.body.appendChild(image);
    })
    .catch(error => {
      // Log an error message if there's an issue loading the image
      console.error('Error loading image:', error);
    });
  