var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('https://jdavenport.instructure.com/')
    .setValue('#pseudonym_session_unique_id', 'test')
    .setValue('#pseudonym_session_password', '12345678')
    .click('.Button--login')
    .url('https://cases.canvaslms.com/')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });
    
