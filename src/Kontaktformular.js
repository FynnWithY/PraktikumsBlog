
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  
function OnButtonPress()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg=document.getElementById("message").value;
    download("Name: "+name+"\n"+"E-Mail: "+email+"\n" + "Message: "+msg+"\n", 'message.txt', 'text/plain');
}
