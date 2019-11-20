var express = require('express');
var router = express.Router();
var _ = require('lodash');
const axios = require('axios').default;


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
    
    const { name} = req.body;

    const id = _.uniqueId();


    axios({
            method: 'get',
            url: `http://www.omdbapi.com/?t=${name}&apikey=56d06498`,
            responseType: 'json'
        })
        .then(function (response) {
            console.log(response.data);
            maData = response.data;
            myMovies.push({ maData, id});
            res.status(200).json({
                message: `Movie just added ${id}`,
                movie: {maData}
            });
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