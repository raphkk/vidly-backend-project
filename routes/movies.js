const express = require('express');
const router = express.Router();

const movies = [
  {
  id: 1,
  genre: "Horror",
  movieName: "The witch",
  rating: 5.5
},
{
  id: 2,
  genre: "Action",
  movieName: "Tenet",
  rating: 9.0
}];

// Created a GET request to pull objects in the movie array
router.get('/', (req, res) => {
  res.send(movies); 
});

router.post('/', (req, res) => {
  const { error } = validateGenre(req.body);
  if(error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const genres = {
    id: movies.length + 1,
    genre: req.body.genre,
    movieName: req.body.movieName,
    rating: req.body.rating
  };
  movies.push(genres);
  res.send(genres);
});

router.put('/:id', (req, res) => {
  const genres = movies.find(c => c.id === parseInt(req.params.id));
    //404 error if genre is not found
    if (!genres) res.status(404).send('The genre with the given ID was not found');
  
    const { error } = validateGenre(req.body);
    if(error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    genres.genre = req.body.genre;
    res.send(genres);
    genres.movieName = req.body.movieName;
    res.send(genres);
    genres.rating = req.body.rating;
    res.send(genres);
});

function validateGenre(genres) {
  const schema = {
    genre: Joi.string().min(2).required(),
    movieName: Joi.string().min(2).required(),
    rating: Joi.number().integer().required()
  };
  
  return Joi.validate(genres, schema);  
}


router.delete('/:id', (req, res) => {
  const genres = movies.find(c => c.id === parseInt(req.params.id));
    //404 error if genre is not found
    if (!genres) res.status(404).send('The genre with the given ID was not found');

    //Delete
    const index = movies.indexOf(genres);
    movies.splice(index, 1);

    res.send(genres);
});

router.get('/:id', (req,res) => {
    const genres = movies.find(c => c.id === parseInt(req.params.id));
    //404 error if genre is not found
    if (!genres) res.status(404).send('The genre with the given ID was not found');
    res.send(genres);
  });

  module.export = router;