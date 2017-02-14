var express= require('express');
var compression = require('compression');
var path = require('path');

var app = express();

var static_path = path.join(__dirname, './../dist');

app.enable('trust proxy');

app.use(compression());

/*var renderToString = require('react-dom/server').renderToString;
var match = require('react-router').match;
var RoutingContext = require('react-router').RoutingContext;
var routes = require('./../src/routes/routes');*/

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

/*app.get('*', function(req, res) {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(renderToString(<RoutingContext {...renderProps} />))
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.route('/').get(function(req, res) {
    res.header('Cache-Control', "max-age=60, must-revalidate, private");
    res.sendFile('index.html', {
        root: static_path
    });
});*/

function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

app.use('/', express.static(static_path, {
    maxage: 31557600
}));

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});