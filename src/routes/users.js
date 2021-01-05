const express = require('express');
const router = express.Router();

router.get('/user/signin', (req, res) => { //defino la ruta para iniciar secion, antepogo que esta ruta lleve user
    res.render('users/signin');
});

router.get('/user/signup', (req, res) => { //defino la ruta del formulario de registro
    res.render('users/signup');
});

module.exports = router;