var autocompleteSource = ["Tag 1", "Begrüßung", "Grundlagen der Informatik", "Aufgaben zu Grundlagen der Informatik", "Recap zu Grundlagen der Infromatik", "Arbeitsalltag", 
"Tag 2", ]

var day1=["Tag 1", "Begrüßung", "Grundlagen der Informatik", "Aufgaben zu Grundlagen der Informatik", "Recap zu Grundlagen der Infromatik", "Arbeitsalltag"]
function openPage(tag)
{
    var url;
    window.location.pathname= tag;
}
function onInput(key)
{
    if(key === "Enter")
    {
        window.location.pathname= "src/day1";
        var inputValue = document.getElementById("search").value;
        console.log("The input value is: " + inputValue);
        openPage(inputValue);
    }
}