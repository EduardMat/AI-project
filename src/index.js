    //function showAnswer(response){
    //alert(response.data.answer);
//}

//let apiKey = "oe3107c03bbf1b061844a8c3d518t9b3";
//let context = "be polite and provide a short answer";
//let prompt = " Who was the first president ? ";
//let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

 

//console.log("Processing...");
//axios.get(apiUrl).then(showAnswer);

//The above code is about the pop in alert with the prime president etc -->

function displayPoem(response){
 new Typewriter("#poem", {
   strings:response.data.answer, 
   autoStart: true,
   cursor: null,
   delay: 50,
 });
       
}


function generatePoem(event){
    event.preventDefault();
let apiKey = "oe3107c03bbf1b061844a8c3d518t9b3";
let context = "you're a romantic poem expert";
let prompt = "tell me a very short poem ";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(displayPoem);


    
}




let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);