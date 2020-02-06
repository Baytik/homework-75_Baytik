const Vigenere = require('caesar-salad').Vigenere;
const express = require('express');

const app = express();
const port = 8000;

app.get('/encode/:text', (req, res) => {
    res.send(Vigenere.Cipher('password').crypt(req.params.text))
});

app.get('/decode/:text', (req, res) => {
    res.send(Vigenere.Decipher('password').crypt(req.params.text));
});

app.listen(port);