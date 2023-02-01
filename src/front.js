var autocompleteSource = ["Tag 1", "Begrüßung", "Grundlagen der Informatik", "Aufgaben zu Grundlagen der Informatik", "Recap zu Grundlagen der Infromatik", "Arbeitsalltag", 
"Tag 2", "Python", "Python Praxis", "Python Recap", "Tung Le Trong", 
"Tag 3", "Robotics", "IT-Sicherheit", "Sap Plattform", "Kai-Peter Schöttelndreier", "Taras Shevchenko",
"Tag 4", "Mobile App Entwicklung", "Raffaele Chianese", 
"Tag 5", "Agilität", "Austausch mit Auszubildenden", "Websitenprogrammierung", "Scrum",
"Tag 6", "Woche 2", "Website", "Entwicklung einer eigenen Website", "Praktikumsblog"]

var day1=["Tag 1", "Begrüßung", "Grundlagen der Informatik", "Aufgaben zu Grundlagen der Informatik", "Recap zu Grundlagen der Infromatik", "Arbeitsalltag"]
var day2=["Tag 2", "Python", "Python Praxis", "Python Recap", "Tung Le Trong"];
var day3=["Tag 3", "Robotics", "IT-Sicherheit", "Sap Plattform", "Kai-Peter Schöttelndreier", "Taras Shevchenko"];
var day4=["Tag 4", "Mobile App Entwicklung", "Raffaele Chianese"]
var day5=["Tag 5", "Agilität", "Austausch mit Auszubildenden", "Websitenprogrammierung", "Scrum"]
var day6=["Tag 6", "Woche 2", "Website", "Entwicklung einer eigenen Website", "Praktikumsblog"]
function openPage(tag)
{
    if(day1.includes(tag))
    {
        window.location.pathname= "src/day1.html";
    }else if(day2.includes(tag))
    {
        window.location.pathname= "src/day2.html";
    }else if(day3.includes(tag))
    {
        window.location.pathname= "src/day3.html";
    }else if(day4.includes(tag))
    {
        window.location.pathname= "src/day4.html";
    }else if(day5.includes(tag))
    {
        window.location.pathname= "src/day5.html";
    }else if(day6.includes(tag))
    {
        window.location.pathname= "src/day6.html";
    }else if(tag === "http://127.0.0.1:5500/res/testLogo.png")
    {
        window.location.pathname= "src/secret.html";
    }                                            
}
function onInput(event)
{
    console.log(event.key)
    if(event.key === "Enter")
    {
        var inputValue = document.getElementById("search").value;
        openPage(inputValue);
    }
}

const input = document.getElementById("search")
input.addEventListener("keydown", function(event){onInput(event)});
