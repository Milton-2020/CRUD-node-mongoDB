const express = require('express');
const router = express.Router();

router.get('/user/sagnin', (req, res) => { //defino la ruta para iniciar secion, antepogo que esta ruta lleve user
    res.send('login');
});

router.get('/user/sagnup', (req, res) => { //defino la ruta del formulario de registro
    res.send('formulario de registro');
});

module.exports = router;