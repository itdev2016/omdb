var express = require('express');
var app = express();
var path = require("path");

app.use('/',express.static('web'));

// app.get('/', function (request, response) {
//     response.sendFile(path.join(__dirname + '/home.html'));

// });

// app.get('/createUser', function (request, response) {
//     tweeterdb.createUser(request.query.name);
//     response.send('Welcome to Twitter clone, ' + request.query.name + "!");
// });

// app.get('/home', function (request, response) {
//     var userId = 1;
//     var p = tweeterdb.getTweetStreamByUser(userId);

//     p.then(
//         val => {
//             var textOut = '';
//             for (row in val) {
//                 textOut += JSON.stringify(val[row]);
//                 // textOut = textOut + val[row].tweetText + " - " + val[row].name + " - " + val[row].time + " (" + val[row].likeCount + ") <br/>";
//             }
//             response.send(textOut);
//         }).catch(
//         err => {
//             //handle all errors
//             console.log(err);
//         });
// });

app.listen(8080, function () {
    console.log('Example app listening on port 8080...');


});
