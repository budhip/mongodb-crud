const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

let app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

let books = require('./routers/books');

app.use('/api/books', books);

app.listen(3000, function() {
  console.log('I am listening on port 3000');
})
