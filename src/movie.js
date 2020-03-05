// this file is where i write all the functions related to my movies code


const results = document.querySelector("#results");
const form = document.querySelector("#search-movies");
const userInput = document.getElementById('keyword');

// function to insert a movie
const insertMovie = (data) => {
      data.Search.forEach((result) => {
        const poster = result.Poster;
        const title = result.Title;
        const movie = `<li class="list-inline-item">
        <img src="${poster}" alt="">
         <p>${title}</p>
        </li>`
        results.insertAdjacentHTML("beforeend", movie)
      })

}

//function make my ajax request

const callbackfunctionAPI = (keyword) => {
 fetch(`http://www.omdbapi.com/?s=${keyword.value}&apikey=d4b9c62c`)
  .then((response) => response.json())
  .then((data) => insertMovie(data));
}

// export this function so the index.js (main entry file) has acces to it
export { callbackfunctionAPI, insertMovie };
