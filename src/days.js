
/** 
 * 
 * @param {*} id the id of the item you want the display to be switched to either block or none
 */
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
/**
 * 
 * @param {*} id the id of an item you want to reveal when a text is clicked
 */
function onTextClick(id)
{
    revealText(id);
}