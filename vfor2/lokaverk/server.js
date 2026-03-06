const express = require('express');
const path = require('path');

const app = express();

const PORT = 5000;


app.set('view engine', 'ejs');
app.set('views', path.join(_dirname, 'src', 'views'));
app.use(express.static(path.join(_dirname, 'public')))