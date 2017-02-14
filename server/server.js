var express= require('express');
var compression = require('compression');
var path = require('path');

var app = express();

var static_path = path.join(__dirname, './../dist');

app.enable('trust proxy');

app.use(compression());

app.use('/', express.static(static_path, {
    maxage: 31557600
}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});