var express = require('express'); //Ensure our express framework has been added
var app = express();
var request = require('request');
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));
app.use('/resources',  express.static(__dirname + '/resources'));


// index page 
app.get('/', function(req, res) {
	res.render('pages/index',{
		local_css:"style.css", 
		my_title:"Main Page" 
	});
});

app.get('/index', function(req, res) {
	res.render('pages/index',{
		local_css:"style.css", 
		my_title:"Main Page" 
	});
});

app.get('/about', function (req, res) {
	res.render('pages/about', {
		local_css: "style.css",
		my_title: "About Page"
	});
});

app.get('/team_members', function (req, res) {
	res.render('pages/team_members', {
		local_css: "style.css",
		my_title: "About Page"
	});
});

app.get('/Mcdonalds', function (req, res) {
	res.render('pages/mcdonalds', {
		local_css: "style.css",
		my_title: "McDonalds Page"
	});
});

app.get('/Qdoba', function (req, res) {
	res.render('pages/qdoba', {
		local_css: "style.css",
		my_title: "Qdoba Page"
	});
});

app.get('/Subway', function (req, res) {
	res.render('pages/subway', {
		local_css: "style.css",
		my_title: "Subway Page"
	});
});

app.get('/Dominos', function (req, res) {
	res.render('pages/dominos', {
		local_css: "style.css",
		my_title: "Dominos Page"
	});
});

app.get('/PizzaHut', function (req, res) {
	res.render('pages/pizzahut', {
		local_css: "style.css",
		my_title: "Pizza Hut Page"
	});
});

app.get('/Potbelly', function (req, res) {
	res.render('pages/potbelly', {
		local_css: "style.css",
		my_title: "Potbelly Page"
	});
});

app.get('/Wendys', function (req, res) {
	res.render('pages/wendys', {
		local_css: "style.css",
		my_title: "McDonalds Page"
	});
});

app.get('/CafeMexicali', function (req, res) {
	res.render('pages/cafemexicali', {
		local_css: "style.css",
		my_title: "Cafe Mexicali Page"
	});
});

app.get('/FiveGuys', function (req, res) {
	res.render('pages/fiveguys', {
		local_css: "style.css",
		my_title: "Five Guys Page"
	});
});

app.get('/Cosmos', function (req, res) {
	res.render('pages/cosmos', {
		local_css: "style.css",
		my_title: "Cosmos Page"
	});
});

var reqTimer = setTimeout(function wakeUp() {
	request("https://hungernulllive.herokuapp.com/", function() {
	   console.log("WAKE UP DYNO");
	});
	return reqTimer = setTimeout(wakeUp, 1200000);
 }, 1200000);

// for heroku deploy

//app.listen(process.env.PORT);


// for local test
const port = 3030;

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
