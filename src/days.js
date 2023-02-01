function revealText(id)
{
    const hiddenText = document.getElementById(id);
    if(hiddenText.style.display == "block")
    {
        hiddenText.style.display = "none";
    }else
    {
        hiddenText.style.display = "block";
    }
}
function onTextClick(id)
{
    revealText(id);
}