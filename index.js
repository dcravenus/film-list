var request = require('request');

var limit = 30;
var minTomato = 70;
var certified = true;

var url = `https://www.rottentomatoes.com/api/private/v2.0/browse?page=1&limit=${limit}&type=dvd-all&minTomato=${minTomato}&sortBy=release&certified=${certified}`;

request(url, function (error, response, body) {
    let movies = JSON.parse(body).results.filter((movie)=>{
        return movie.mpaaRating !== 'R';
    }).map((movie)=>{
        //Remove <em> tags
        movie.synopsis = movie.synopsis.replace(/(<\/?em>)/ig,"");
        return movie;
    });
    console.log(movies);
    riot.mount('film-cardlist', {films: movies});
});

riot.mount('attributions');
