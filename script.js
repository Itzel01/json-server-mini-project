console.log("Hellow")
/*
 * User can add movie to their collection
 * User can add image Url to the new movie 
 * User can delete movies from their collection
 */


 document.addEventListener("DOMContentLoaded", () => {
    let addAMovie = document.getElementById("add-a-movie");
    let movieName = document.getElementById("movie-name");
    let movieImg = document.getElementById("movie-URL");
    let AddMovieButton = document.getElementById("AddMovieButton");
    let movieDiv = document.getElementById("card");
    
    addAMovie.addEventListener("submit", addMovies); 
 })
/**
 * when the submit event happens, grab the current value
 * make a post fetch to the db.json api 
 * manipulate the DOM to show the new movie added. 
 */

 function addMovies (e){
     e.preventDefault()
     
    //  let bodyData = {
    //      header: 

    //  }
    //  let options = {
    //      method: "POST",
    //      body: 
    //  }

     fetch("db.json")
     .then(response => response.json())
     .then(data => {
         console.log(data)
     })
     
 }

 