const Vigenere = require('caesar-salad').Vigenere;
const express = require('express');
const router = express.Router();

router.post('/encode', (req, res) => {
    const text = Vigenere.Cipher(req.body.password).crypt(req.body.encode);
    const encode = {
      encode: text
    };
    res.send(encode);
});

router.post('/decode', (req, res) => {
    const text = Vigenere.Decipher(req.body.password).crypt(req.body.decode);
    const decode = {
      decode: text
    };
    res.send(decode);
});

module.exports = router;