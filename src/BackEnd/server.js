const express = require('express');
const app = express();
const port = 4000; // Port on which the server will run

// Import and use the cors library to enable Cross-Origin Resource Sharing
const cors = require('cors');
app.use(cors());

// Middleware to set HTTP headers for handling CORS manually
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next(); 
});

// Import and use body-parser to parse URL-encoded data in the request body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Define a GET route for the root URL 
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Define a GET route for /api/movies that responds with a list of movies in JSON format
app.get('/api/movies', (req, res) => {
  const movies = [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ];
  res.status(200).json({ movies }); // Respond with a status code of 200 and the movies data in JSON
});

// Define a POST route for /api/movies to receive movie data from the client
app.post('/api/movies', (req, res) => {
  console.log(req.body); 

  res.send("item received"); 
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});
