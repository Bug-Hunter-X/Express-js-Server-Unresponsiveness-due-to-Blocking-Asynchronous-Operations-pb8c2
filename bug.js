const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronously fetching data from a database or external API
  // If this operation takes longer than expected it might lead to the next request being blocked
  someDatabaseCall().then(data => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});