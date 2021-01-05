//aca definimos la conexion ala base de datos
const mongose = require('mongoose'); //importamos el modulo mongoose para crear la conexion a la mongoDB

mongose.connect('mongodb://localhost/notes-db-app', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))