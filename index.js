const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

// Middleware
// ===========================================================

app.use(express.static( path.join(__dirname, 'public') ));

// View Engine
// ===========================================================
app.engine('handlebars', exphbs({
	extname: 'handlebars', 
	defaultLayout: 'main', 
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials/'
}));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'handlebars');

// Routes
// ===========================================================
const {categories, address} = require('./data');
app.get('/', function(req, res){ 
	res.render('categories', {
		title: 'VW DriverGear.',
		desc: 'Your Volkswagen enthusiasm extends far beyond your daily commute--which is why we have the VW DriverGear you want, everything from drinkware to sporting equipment to jewelry. You\'ll discover that there\'s a whole world of VW for you to enjoy, in and out of your car.',
		categories,
		address
	});
});

// Listener
// ===========================================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

