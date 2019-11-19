var express = require('express');
var router = express.Router();
var _ = require('lodash');

var myMovies = [
    {
        id: "0",
        name: "Titanic"},
    {
        id: "1",
        name: "Bad Boys"
    }
];

/* GET all movies. */
router.get('/', (req, res) => {
  res.status(200).json({myMovies});
});

/* GET movies by id. */
router.get('/:id', (req, res) => {
    
    const { id } = req.params ;

    const movie = _.find(myMovies, ['id', id]);


    res.status(200).json({
        message: 'Movie Found',
        movie
    });
});



module.exports = router;