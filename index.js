var express = require('express');

var app = express();

app.use(express.static('public'));

var port = 2000;
app.listen(port, function() {
  console.log('listening to port',port);
})
