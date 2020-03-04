console.log("Hello from src/index.js!");

// Fist part of the lecture: rehearsal on events
  // const button = document.getElementById("click-me");
  // // console.log(button)

  // button.addEventListener("click", (apple) => {
  //   console.log(apple); // console log the event
  //   console.log(apple.currentTarget); // console log the target
  //   apple.currentTarget.innerHTML = "Thank you!"; // changing the
  // })


//Second part of the lecture: How does AJAX work ?

//first step: check every step of the way with console.log
  // fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7") // console.log and check ig get a promise pending
  //  .then((response) => response.json()) // get a json, an object, check your console and that your response is a json object. This is the equivalent in ruby of doing JSON.parse(api_url)
  //  .then((data) =>  {
  //   console.log(data.Search); // I can see that I can access the value of my key Search and get back an array
  // });


// Second step:  start playing with the data i m getting back from the apiconsole.log(fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")); // get a promise
  // const results = document.getElementById("results"); //  I select the ul because I want to append the movie from the api to this ul
  //  results.insertAdjacentHTML("beforeend", <li> ${title} {poster} </li>)

  // fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  //  .then((response) => response.json()) // get a json, an object, check your console and that your response is a json object.equivalent in ruby of doing JSON.parse(api_url)
  //  .then((data) =>  {
  //   data.Search.forEach((babyObject) => {
  //     // console.log(babyObject);
  //     // console.log(babyObject.Title);
  //     const title = babyObject.Title;
  //     // console.log(babyObject.Poster);
  //     const poster = babyObject.Poster;
  //     results.insertAdjacentHTML("beforeend", `<li class="list-inline-item">
  //       <p>${title}</p>
  //       <img src="${poster}">
  //       </li>` )
  //   })
  // })



//Third step: allow the user to look for any movie and get the movie back: combine yoru ajax request with an event (submitting the keyword on the form)

  //1. I need to get the value for the keyword dthat the user is giving
  // const keyword = document.getElementById("keyword")
  // console.log(keyword);

  // const results = document.getElementById("results");
  // I want to append the movie from the api to this ul
  // results.insertAdjacentHTML("beforeend", <li> ${title} {poster} </li>)
  //i need to sleect my form and add eventlistener to it. I want to look for the word that the user types in the input of the form.
  // const form = document.querySelector("#search-movies");
  // //I only to perform the fetch request when the user submits his search keyword
  // // form.addEventListener("submit", callbackfunction)

  // form.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   results.innerHTML = "";
  //   // console.log(event); //submit
  //   // console.log(event.currentTarget); //formn
  //   // console.log(keyword); //the input value of the keyword that the user entering in the form
  //   fetch(`http://www.omdbapi.com/?s=${keyword.value}&apikey=adf1f2d7`)
  //    .then((response) => response.json()) // get a json, an object, check your console and that your response is a json object.equivalent in ruby of doing JSON.parse(api_url)
  //    .then((data) =>  {
  //     // console.log(data);
  //     data.Search.forEach((babyObject) => {
  //       // console.log(babyObject);
  //       // console.log(babyObject.Title);
  //       const title = babyObject.Title;
  //       // console.log(babyObject.Poster);
  //       const poster = babyObject.Poster;
  //       results.insertAdjacentHTML("beforeend", `<li class="list-inline-item">
  //         <p>${title}</p>
  //         <img src="${poster}">
  //         </li>` )
  //     })
  //   })
  // })


// EXTRA LAST STEP: REFACTORING WITH FUNCTIONS
const results = document.querySelector("#results");
const form = document.querySelector("#search-movies");
const userInput = document.getElementById('keyword');

// AJAX REQUEST / API CALL
const callbackfunctionAPI = (keyword) => {
 fetch(`http://www.omdbapi.com/?s=${keyword.value}&apikey=d4b9c62c`)// promise pending;
  .then((response) => response.json())//promise pending but json;
  .then((data) => {
      data.Search.forEach((result) => {
        const poster = result.Poster;
        const title = result.Title;
        const movie = `<li class="list-inline-item">
        <img src="${poster}" alt="">
         <p>${title}</p>
        </li>`
        results.insertAdjacentHTML("beforeend", movie)
      })
    });
}

// binding the form to the event submit t
form.addEventListener("submit", (event) => {
  const userInput = document.getElementById('keyword');
  event.preventDefault();
  results.innerHTML = "";
  callbackfunctionAPI(userInput)
});







