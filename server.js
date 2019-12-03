var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

// index page 
app.get('/', function(req, res) {
	res.render('pages/index',{
		local_css:"style.css", 
		my_title:"Main Page"
	});
});

var reqTimer = setTimeout(function wakeUp() {
	request("https://nameless-gorge-19527.herokuapp.com", function() {
	   console.log("WAKE UP DYNO");
	});
	return reqTimer = setTimeout(wakeUp, 1200000);
 }, 1200000);

// for heroku deploy

app.listen(process.env.PORT);

/*
// for local test
const port = 3030;

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});*/