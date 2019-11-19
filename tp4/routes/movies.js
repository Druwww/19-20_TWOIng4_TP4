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





module.exports = router;