var autocompleteSource = ["Tag 1", "Begrüßung", "Grundlagen der Informatik", "Aufgaben zu Grundlagen der Informatik", "Recap zu Grundlagen der Infromatik", "Arbeitsalltag", 
"Tag 2", "Python"]

var day1=["Tag 1", "Begrüßung", "Grundlagen der Informatik", "Aufgaben zu Grundlagen der Informatik", "Recap zu Grundlagen der Infromatik", "Arbeitsalltag"]
var day2=["Tag 2", "Python"];
function openPage(tag)
{
    if(day1.includes(tag))
    {
        window.location.pathname= "src/day1.html";
    }else if(day2.includes(tag))
    {
        window.location.pathname= "src/day2.html";
    }
}
function onInput(event)
{
    if(event.key === "Enter")
    {
        // window.location.pathname= "src/day1.html";
        var inputValue = document.getElementById("search").value;
        console.error("The input value is: " + inputValue);
        openPage(inputValue);
    }
}

const input = document.getElementById("search");

  input.addEventListener("keydown", function (event) {
    onInput(event);
  });