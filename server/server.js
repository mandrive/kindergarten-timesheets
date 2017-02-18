var express= require('express');
var compression = require('compression');
var path = require('path');
var pdfdocument = require('pdfkit');
var app = express();

var static_path = path.join(__dirname, './../dist');

var generateDocument = function(res) {
    var doc = new pdfdocument();
  doc.addPage()
   .fontSize(25)
   .text('Here is some vector graphics...', 100, 100);

  doc.save()
   .moveTo(100, 150)
   .lineTo(100, 250)
   .lineTo(200, 250)
   .fill("#FF3300");

  doc.pipe(res);
  doc.end();
}

app.enable('trust proxy');

app.use(compression());

app.use('/', express.static(static_path, {
    maxage: 31557600
}));

app.get('/api/test', (req, res) => {
  generateDocument(res);
  //res.sendFile(path.resolve(__dirname, '..', 'dist', 'output.pdf'));
});

app.get('/app/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});