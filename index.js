// Build a backend service called vidly - completed
// Vidly is a backend service for renting out movies
// First task - Create a service for managing a list of genres
// Each movie has a genre of Action, horror etc ( Create an object)
// Create an endpoint for getting the list of all genres
// Your backend should be able to create a new genre
// Update or delete the genre

// This exists inside the node_module
const _ = require('underscore');
const movies = _.contains([{
  "genre": "Horror",
  "movie name": "The witch",
  "rating": 5.5
},
{
  "genre": "Action",
  "movie name": "Tenet",
  "rating": 9.0
}
]);
console.log(movies);