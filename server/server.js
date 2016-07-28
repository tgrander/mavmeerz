const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

/// for development ///
const morgan = require('morgan');

app.use(morgan('dev'));
///      ////      ///


/// looks for 'index.html' in '/../build' by default ///
app.use(express.static(__dirname + '/../build'));

app.listen(port);

console.log('Zenmo is now listening on port ' + port);
