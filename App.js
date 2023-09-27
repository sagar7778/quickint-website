const handler = require ('./src/pages/api/hello')

const express = require('express');
const app = express();
const port = process.env.PORT || 3003; // Use the provided port or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});