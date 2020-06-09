const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authentication = require('./authentication');

const app = express();
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'jcrm-backend-app', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

app.use(authentication);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log('server started at port 3000');
})
