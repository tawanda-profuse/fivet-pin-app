if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Accessing node packages:
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const homeRouter = require('./routes/dashboard');
const itemOneRouter = require('./routes/page_1');
const itemTwoRouter = require('./routes/page_2');

// Public Folder
app.use(express.static('public'));

// Database configuration
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

// Excluding the layouts from the web pages
app.set('layout landing', false);

// Express body parser
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false 
  }));

// Method Override
app.use(methodOverride('_method'));

// Accessing pages through routes
app.use('/', indexRouter);
app.use('/dashboard', homeRouter);
app.use('/page-1', itemOneRouter);
app.use('/page-2', itemTwoRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

