var express = require('express');
var app = express();
var request = require('request');
app.set('port', (process.env.PORT || 5000));


app.get('/storytime', function(req, res) {
	res.send("<p>hey"+req.query.name +" nice to meet you</p>");
});

app.listen(app.get('port'), function() {
	console.log('Fuck it ship it.');
});
