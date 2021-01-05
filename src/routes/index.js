const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { //definimos la ruta inicial y quiero que tenga una req y un res
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about'); //definimos el nombre del archivo .hbs
});
module.exports = router;