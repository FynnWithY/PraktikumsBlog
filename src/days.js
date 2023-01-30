function revealText(id)
{
    const hiddenText = document.getElementById(id);
    hiddenText.style.display = "block";
}
function onTextClick(id)
{
    revealText(id);
}