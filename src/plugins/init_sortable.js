
//this file is for all the code related to my plugin sortable.js

//1. importing the sortable code from node module folder
import Sortable from 'sortablejs';


//2. use the code and look in the documentation
const initSortable = () => {
  const list = document.querySelector('#results');
  Sortable.create(list, {
  ghostClass: "ghost",
  animation: 150,
  onEnd: (event) => {
    alert(`${event.oldIndex} moved to ${event.newIndex}`);
  }
});
};


//export it to be able to invoke it inside of my index.js
// syntax: export { nameOfFunction };
 export { initSortable };

// Important to rememberÑ
// package.json is where i see if packages are well installed
// node modules is where they are actually sitting/installed in my project
