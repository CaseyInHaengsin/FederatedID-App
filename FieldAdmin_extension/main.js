
let changeColor = document.getElementById('changeColor');
let login2delete;
let newLoginPassword;
let tokenCanvas;

getFederated.onclick = function(element) {
    let email=document.getElementById("email").value;
    let urlreal=document.getElementById("url").value;
    
    
    var form = new FormData();
form.append("", "");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://"+urlreal+".instructure.com/api/v1/accounts/self/users?search_term="+email,
  "method": "GET",
  "headers": {
    "Authorization": tokenCanvas,
    "Cache-Control": "no-cache",
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
  let ParsedJSON =JSON.parse(response);
  let userCanvasID = ParsedJSON[0].id;
  console.log(userCanvasID)
  createLoginTest(userCanvasID, urlreal);


});

  };
  const createLoginTest =
  (canvasID, subdomain) => { 
    login2delete="test1000";
    newLoginPassword="12345678";
    var form = new FormData();
    form.append("user[id]", canvasID);
    form.append("login[unique_id]", login2delete);
    form.append("login[password]", newLoginPassword);
    
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://"+subdomain+".instructure.com/api/v1/accounts/2259/logins",
      "method": "POST",
      "headers": {
        "Authorization": tokenCanvas,
        "Cache-Control": "no-cache",
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      console.log("completed!!!")
    });
   }