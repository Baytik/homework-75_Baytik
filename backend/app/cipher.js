const Vigenere = require('caesar-salad').Vigenere;
const express = require('express');
const router = express.Router();

router.post('/encode', (req, res) => {
    const text = Vigenere.Cipher(req.body.password).crypt(req.body.message);
    const objText = {
      encoded: text
    };
    res.send(objText);
});

router.post('/decode', (req, res) => {
    const text = Vigenere.Decipher(req.body.password).crypt(req.body.message);
    const objText = {
        encoded: text
    };
    res.send(objText);
});

module.exports = router;