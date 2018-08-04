var webdriverio = require('webdriverio');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var options2 = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
let email = "jdavenport@instructure.com"
let password = "therighthand"
webdriverio
    .remote(options2)
    .init()
    .url('https://instructure.my.salesforce.com/setup/secur/SAMLValidationPage.apexp?ssoconfid=0LEA00000004CH2')
    .setValue('#username', email)
    .setValue('#password', password)
    .click('#Login').then(function(){
        rl.question('What do you think of Node.js? ', (answer) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${answer}`);
          
          });
    })
    .getHTML('p').then(function(p){
    console.log(p)
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });