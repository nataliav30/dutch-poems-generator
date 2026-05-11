function generatePoem(event) {
    event.preventDefault();

 let poemElement = document.querySelector("#poem");
 
new Typewriter('#poem', {
  strings:"De hoop die lacht...",
  autoStart: true,
  cursor:"",
});

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);