const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation with error handling
  setTimeout(() => {
    try {
      // Simulate a potential error
      // throw new Error('Something went wrong!');
      res.send('Hello from Node.js!');
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('Internal Server Error');
    }
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});