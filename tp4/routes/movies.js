var express = require('express');
var router = express.Router();
var _ = require('lodash');

var myMovies = [];

/* GET all movies. */
router.get('/', (req, res) => {
  res.status(200).json({myMovies});
});

/* GET movies by id. */
router.get('/:id', (req, res) => {
    
    const { id } = req.params ;

    const movie = _.find(myMovies, ['id', id]);


    res.status(200).json({
        message: 'Movie Founde',
        movie
    });
});

/* PUT add movie . */
router.put('/', (req, res) => {
    
    const { name, info } = req.body;

    const id = _.uniqueId();

    myMovies.push({name, info, id});

    res.status(200).json({
        message: `Movie just added ${id}`,
        movie: {name, info, id}
    });
});

/* POST update movie by id . */
router.post('/:id', (req, res) => {
    
    const { id } = req.params;
    const { name, info } = req.body;

    const movieToUpdate = _.find(myMovies, ['id', id]);

    movieToUpdate.name = name;
    movieToUpdate.info = info;

    res.status(200).json({
        message: `Movie just update ${id}`,
        movie: {name, info, id}
    });
});

/* DELETE movie by id . */
router.delete('/:id', (req, res) => {
    
    const { id } = req.params;

    _.remove(myMovies, ['id', id]);

    res.status(200).json({
        message: `Movie just remove ${id}`,
    });
});








module.exports = router;