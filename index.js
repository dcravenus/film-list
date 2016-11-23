var request = require('request');
var localForage = require('localForage');

var movies = [];
var favorites = [];

getFilms();
getFavorites();

riot.mount('attributions');


function getFilms() {
    var limit = 30;
    var minTomato = 70;
    var certified = true;

    var url = `https://www.rottentomatoes.com/api/private/v2.0/browse?page=1&limit=${limit}&type=dvd-all&minTomato=${minTomato}&sortBy=release&certified=${certified}`;

    request(url, function (error, response, body) {
        movies = JSON.parse(body).results.filter((movie)=>{
            return movie.mpaaRating !== 'R';
        }).map((movie)=>{
            //Remove <em> tags
            movie.synopsis = movie.synopsis.replace(/(<\/?em>)/ig,"");
            return movie;
        });
        console.log(movies);
        riot.mount('film-cardlist', {films: movies});
    });
}

function getFavorites() {
    localForage.getItem('favorites').then((favoritesData)=>{
        if(favoritesData){
            favorites = favoritesData;
        }
        riot.mount('favorite-cardlist', {films: favorites});
    });
}


function addFavorite(id){
    var favorite = movies.find((movie)=>{
        return movie.id === id;
    });


    if(favorite && !favorites.find((movie)=>{
        return movie.id === favorite.id;
    })){
        favorites.push(favorite);
        localForage.setItem('favorites', favorites);
        riot.mount('favorite-cardlist', {films: favorites});
    }
}

function removeFavorite(id){
    var favoriteIndex = favorites.findIndex((movie)=>{
        return movie.id === id;
    });

    if(favoriteIndex !== -1){
        favorites.splice(favoriteIndex,1);
        localForage.setItem('favorites', favorites);
        riot.mount('favorite-cardlist', {films: favorites});
    }
}
