var express = require('express');

var app = express.createServer(express.logger());

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Running on " + process.version);
    console.log("Listening on " + port);
});
