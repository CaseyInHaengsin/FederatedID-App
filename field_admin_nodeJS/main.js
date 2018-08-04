let changeColor = document.getElementById('changeColor');
let login2delete;
let newLoginPassword;

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
    "Authorization": "Bearer 17~EzMMTLQFYGX5OQpi7lgqEmYZwtQmBkeJz94M7WEjuZomRdTPxwJ5bzfoEIZd5KMa",
    "Cache-Control": "no-cache",
    "Postman-Token": "d3a8f3c2-945c-4ec9-bac4-98e6d46b38bc"
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
        "Authorization": "Bearer 17~EzMMTLQFYGX5OQpi7lgqEmYZwtQmBkeJz94M7WEjuZomRdTPxwJ5bzfoEIZd5KMa",
        "Cache-Control": "no-cache",
        "Postman-Token": "40269aa9-0a1e-4bbe-af37-14ad3bee536f"
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