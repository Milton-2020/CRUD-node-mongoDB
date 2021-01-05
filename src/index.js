const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//inicializacion
const app = express();
require('./database'); //aca inicializo la base de datos
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //para definir la ruta views la propiedad __dirname pasamos la uvicasion acrtual
app.set('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//Gloval Variables


//Routes
app.use(require('./routes/index')); //para indicarle que use esta ruta para acceder a index
app.use(require('./routes/note'));
app.use(require('./routes/users'));

//Static Files
app.use(express.static(path.join(__dirname, 'public'))); //defina la ruta asia la carpeta poblic 

//Server is Listening 
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});