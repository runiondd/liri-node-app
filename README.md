# liri-node-app

#Liri Search Bot#

This node application at it's core is a simple SWITCH CASE statement.  From the command line run the liri.js file as you would any other Node.js and provide it with any of the following commands then a search term as noted below:

Commands & Filter:
  * "*concert-this*" *Artist*
     - Will call the Bands In Town API and return the first result of a concert matching the artist that you entered.  
      
  - "*spotify-this-song*" *Song*
      - Will call the Spotify API and return the first result matching the song you entered.  
      
  - "*movie-this*" *Movie*
      - Will call the IMBD API and display the details of the movie you searched for.  
    
  - "*do-what-it-says*" n/a
      - No search filter accepted, just call liri.js with this command and it will read in a search term from the file "random.txt" and search Spotify for the term that was read into the file.  Random.txt is structured as a comma delimited file so the search term is always idex 1 on the array created using the javascript "split()" function.  
      
 All entered commands are logged to the comma delimited log.txt file so that it can be easily read into an array later if desired.  You'll need to strip off the trailing ",".  
 
 
Dependancies:
- fs
- moment
- axios
- node-spotify-api

The successful Bands In Town Call
 ![alt text](https://github.com/runiondd/liri-node-app/blob/master/images/liri%20bands%20in%20town.png)
  
The successfull case when calling "*spotify-this-song*" *Song*
![alt text](https://github.com/runiondd/liri-node-app/blob/master/images/liri%20spotify%20success.png)

 The "no result/default" case when calling "*spotify-this-song*" *Song*
 ![alt text](https://github.com/runiondd/liri-node-app/blob/master/images/spotify%20Ace%20of%20Base.png)
 
 The Successful OMDB Call
 ![alt text](https://github.com/runiondd/liri-node-app/blob/master/images/OMDB%20success.png)
  
The "no result/default" OMDB Call
 ![alt text](https://github.com/runiondd/liri-node-app/blob/master/images/omdb%20Dr%20Nobody.png)
  
  The Read from a file and call Spotify use case
 ![alt text](https://github.com/runiondd/liri-node-app/blob/master/images/read%20from%20File%20and%20search%20Spotify.png)
  
