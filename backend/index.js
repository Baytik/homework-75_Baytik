const express = require('express');
const cors = require('cors');
const cipher = require('./app/cipher');

const app = express();
const port = 8300;

app.use(cors());
app.use(express.json());
app.use('/', cipher);

app.listen(port);