// required libraries
require("dotenv").config();
var fs = require("fs");
var moment = require('moment');
var axios = require("axios");
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);

//pull in required variables
var spotifyTest = process.env.SPOTIFY_ID
let command = process.argv[2]
let searchTerm = process.argv[3]

switch (command){
    case "concert-this":  //bands in town
        searchForBandsInTown(searchTerm);
        break;
    case "spotify-this-song":  //spotify
        spotifyThisSong(searchTerm);
        break;
    case "movie-this":  // OMDB for movies
        movieThis(searchTerm);
        break;
    case "do-what-it-says":  //  read commands from a file and excute the commands above
        doRandom();
    break;
}
    
    function searchForBandsInTown(artist) {
        var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(queryUrl).then(
            function(response) {
                console.log("Event Veunue: " + response.data[0].venue.name);
                console.log("Event Location: " + response.data[0].venue.city);
                var eventDateTime = moment(response.data[0].datetime);
                console.log("Event Date & Time: " + eventDateTime.format("dddd, MMMM Do YYYY"));
            }
        );
    }

    function spotifyThisSong(song) {
        spotify
        .search({ type: 'track', query: song })
        .then(function(response){
        // console.log(response.tracks.lenth);
            // if (response.tracks.lenth > 0) {
                console.log("Artist: " + response.tracks.items[0].artists[0].name);
                console.log("Track: " + response.tracks.items[0].name);
                console.log("Preview URL: " + response.tracks.items[0].preview_url);
                console.log("Album: " + response.tracks.items[0].album.name);
            // if response is "empty" call the spotify api again with the "default" song.  See function below.
            
                // } else {
            //     errorConditionForSpotify();
            // }
        });
    }

    function errorConditionForSpotify() {
        spotify
        .search({ type: 'track', query: 'The Sign' })
        .then(function(response) {
            for (var i=0;i<=response.tracks.items.lenth; i++) {
                if (response.tracks.items[i].artists === "Ace of Base") {
                    console.log("Artist: " + response.tracks.items[0].artists[0].name);
                    console.log("Track: " + response.tracks.items[0].name);
                    console.log("Preview URL: " + response.tracks.items[0].preview_url);
                    console.log("Album: " + response.tracks.items[0].album.name);
                }
            }
        });
    }

    function movieThis(movie) {
        axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
            function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("imdbRating:: " + response.data.imdbRating);
            console.log("Title: " + response.data.Title);
            console.log("Country:: " + response.data.Country);
            console.log("Language:: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("RottenTomatoes: " + response.data.tomatoRating);
            }
            // if response is empty call the api again with the "default" movie 
        );
    }

    function doRandom() {
        fs.readFile("random.txt", "utf8", function(error, data) {
            var dataArr = data.split(",");
            spotifyThisSong(dataArr[1])
            // If the code experiences any errors it will log the error to the console.
            if (error) {
              return console.log(error);
            }
        });
    }