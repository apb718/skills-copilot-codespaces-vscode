// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that accepts POST requests
app.post('/comments', (req, res) => {
  // Respond with a JSON object
  res.json({status: 'OK'});
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});