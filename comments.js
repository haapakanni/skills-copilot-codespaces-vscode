// Create web server and listen on port 3000
// Route: GET /comments
// Return comments array as JSON
// Route: POST /comments
// Create a new comment object and add to comments array
// Return the new comment object as JSON

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const comments = [
  { id: 1, author: 'John Doe', body: 'Cool post!' },
  { id: 2, author: 'Jane Doe', body: 'Nice article!' },
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});