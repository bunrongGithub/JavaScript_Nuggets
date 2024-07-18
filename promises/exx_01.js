const uri = 'https://jsonplaceholder.typicode.com/posts/1';

function fetchApi() {
    /// Pending state
  return new Promise((resolve, reject) => {
    fetch(uri)
    // Resolve State
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response error');
        }
        return response.json(); // Parse the response body as JSON
      })
      .then(data => {
        resolve(data); // Resolve with the parsed JSON data
      })
      ///  Reject state
      .catch(err => {
        reject(err); // Handle any errors during fetch or JSON parsing
      });
  });
}

fetchApi()
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(err => {
    console.error('Error fetching data:', err);
  });
