function displayPoem(response){

new Typewriter('#poem', {
  strings:response.data.answer,
  autoStart: true,
  cursor:"",
});
}

function generatePoem(event) {
    event.preventDefault();

instructionsInput =document.querySelector("#user-instructions");  
let apiKey ="42f9f7o40fb01efcb7506tab5365877a";
let context =" You are a romantic poem expert that loves to write short poems.Your mission is to generate a 4 line poem in basic HTML.Make sure to follow the user instructions. Example <p> this is a poem </p>. Separate each line with a <br/> .Sign the poem with 'SheCodes AI' inside a <strong> element at the end.";
let prompt =`User instructions are: Generate a Dutch poem about ${instructionsInput.value}`;

let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML=`⏳ Generating a Dutch poem about ${instructionsInput.value}`;

axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);