const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      sysInfo      = require('./utils/sys-info'),
      express      = require('express'),
      env          = process.env;

var app = express();
app.use(express.static('public')); 

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(function(req, res, next) {
  /*res.status(404).send('Sorry cant find that!');*/
  res.status(404).sendFile(__dirname + '/public/index.html');
});

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
