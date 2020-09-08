var app = require('connect')()
var serveStatic = require('serve-static')

// Serve up mock-api folder
app.use('/api', serveStatic('mock-api', {
  'index': false,
  'setHeaders': setJsonHeaders
}))
 
// Set header to force download
function setJsonHeaders (res, path) {
  res.setHeader('Content-type', 'application/json')
}

// Serve up public folder
app.use('/', serveStatic('public', {'index': ['index.html', 'index.htm']}))


app.listen(process.env.PORT || 5000, function () {
   server.address().port;
  console.log("Express is working on port " + port);
});