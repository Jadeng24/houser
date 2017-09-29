const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const checkForSession = require('./middlewares/checkForSession.js');

const auth_controller = require('./controllers/auth_controller.js');
const search_controller = require('./controllers/search_controller.js');
const home_controller = require('./controller/home_controller.js');

const app = express();

app.use(bodyParser.json());
app.use( session({
    secret: "slkdfjaajivealnvsl",
    resave: false,
    saveUninitialized: false
}))

app.use( checkForSession );
// app.use( express.static( `${__dirname}/../public/build`) );

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))


app.get('/api/user', auth_controller.getUser)
app.post('/api/login', auth_controller.login)
app.post('/api/register', auth_controller.register)
app.post('/api/signout', auth_controller.signout)

// app.post('/api/properties', .add)
app.get('/api/properties', home_controller.getHomes)
// app.delete('/api/properties/:id', )

app.get('/api/search', search_controller.search)



const port = 3000;
app.listen(port, () => { console.log(`Server listening on port ${port}.`)})