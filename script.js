console.log("Hellow")
/*
 * User can add movie to their collection
 * User can add image Url to the new movie 
 * User can delete movies from their collection
 */


 document.addEventListener("DOMContentLoaded", () => {
    let addAMovie = document.getElementById("add-a-movie");
    addAMovie.addEventListener("submit", addMovies); 

    let AddMovieButton = document.getElementById("AddMovieButton");
    let movieDiv = document.getElementById("card");


    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(data => displayMovies(data))

    
 })
 
 function displayMovies(data){
     data.forEach(makecard)
 }

 function makecard(movie){
    let collection = document.getElementById("collection");
    let cardDiv = document.createElement("div");
    let name = document.createElement("h3");
    let img = document.createElement("img");
    let button = document.createElement("button");

    name.innerText = movie.name;
    img.src = movie.imageURL;
    button.innerText = "Remove"

    cardDiv.classList = "card"
    img.classList = "avatar"
    button.classList = "btn";
    button.id = `${movie.id}`;
    

    cardDiv.append(name,img, button);
    collection.append(cardDiv);

    deleteCard(cardDiv);

 }

/**
 * when the submit event happens, grab the current value
 * make a post fetch to the db.json api 
 * manipulate the DOM to show the new movie added. 
 */

 function addMovies (e){
    let movieName = document.getElementById("movie-name");
    let movieImg = document.getElementById("movie-URL");

     e.preventDefault()

     let data = {"name": `${movieName.value}`, "imageURL": `${movieImg.value}`}
     let options = {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(data)
     }

     fetch("http://localhost:3000/movies", options)
     .then(response => response.json())
     .then(data => {
        makecard(data)
     })
 }


 function deleteCard (card){
     let remove = card.children[2];
     let name = card.children[0].innerText;

     remove.addEventListener('click', () => {
        fetch(`http://localhost:3000/movies?name=${name}` )
        .then(response => {
            return response.json()
        })
        .then(data => {
            let options = {
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json"
                }

                }
            
            fetch(`http://localhost:3000/movies/${data[0].id}`, options)
        })
     card.remove();

     })

 }

 