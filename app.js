const express = require('express');
const app = express();
const db = require('./models/index')

app.use(express.urlencoded({extended:false}));
app.use(express.json())


db.sequelize.sync({alert: true})
    .then(() => console.log("Connected successfully"))
    .catch((error) => console.log('oups erreur : ' +error.message));

require('./routes/userroute')(app);    


module.exports = app;