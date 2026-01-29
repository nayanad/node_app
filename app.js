const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// Simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js API 🚀' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
