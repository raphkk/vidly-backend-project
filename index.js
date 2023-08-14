// Build a backend service called vidly - completed
// Vidly is a backend service for renting out movies
// First task - Create a service for managing a list of genres
// Each movie has a genre of Action, horror etc ( Create an object)
// Create an endpoint for getting the list of all genres
// Your backend should be able to create a new genre
// Update or delete the genre
// Moved all the API endpoints to a folder called router

// This exists inside the node_module
const Joi = require('joi');
const express = require('express');
const app = express();
const movies = require('./routes/movies');

app.use(express.json());
app.use('/vidly/movies', movies);


const port = process.env.PORT || 3000;
// Edit code below to ensure GET request receives your request
app.listen(port, ()  => console.log(`Listening on port ${port}...`)); 