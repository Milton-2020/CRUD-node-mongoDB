const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { //definimos la ruta inicial y quiero que tenga una req y un res
    res.send('Welcome my site');
});

router.get('/about', (req, res) => {
    res.send('this about');
});
module.exports = router;