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

function generatePoem(event){
    event.preventDefault();


    new Typewriter("#poem", {
      strings:"La vita est bella ",
      autoStart: true,
      cursor: null,
      delay: 60,
    });
    

}




let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);