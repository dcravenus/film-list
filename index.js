var request = require('request');

var url = "https://www.rottentomatoes.com/api/private/v2.0/browse?page=1&limit=30&type=dvd-all&minTomato=70&sortBy=release&certified=true";

request(url, function (error, response, body) {
    let movies = JSON.parse(body).results.filter((movie)=>{
        return movie.mpaaRating !== 'R';
    });
    console.log(movies);
    riot.mount('film-cardlist', {films: movies});
});

