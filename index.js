function showAnswer(response){
    alert(response.data.answer);
}

let apiKey = "oe3107c03bbf1b061844a8c3d518t9b3";
let context = "be polite and provide a short answer";
let prompt = " Who was the first president ? ";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

 

console.log("Processing...");
axios.get(apiUrl).then(showAnswer);