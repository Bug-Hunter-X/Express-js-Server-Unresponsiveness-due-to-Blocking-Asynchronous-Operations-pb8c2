const express = require('express');
const app = express();
const port = 3000;

// Simulate a database call (replace with your actual database interaction)
const someDatabaseCall = () => new Promise(resolve => {
  // Simulate a delay to mimic a slow database call
  setTimeout(() => {
    resolve({ message: 'Data from database' });
  }, 100); // Reduced delay for demonstration
});

app.get('/', async (req, res) => {
  try {
    const data = await someDatabaseCall();
    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});