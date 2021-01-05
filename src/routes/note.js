const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => { //definimos la rota de donde se mostraran las notas que vienen desde la base de datos
    res.send("notes from database");
});

module.exports = router;