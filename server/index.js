require ('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

//CONTROLLERS
const ctrl = require('./controller');

//DOTENV
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

//MIDDLEWARE
app.use(express.json());
app.use(
   session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    })
);

//ENDPOINTS
app.get("/api/houses",ctrl.getHouses)
app.post("/api/add", ctrl.addHouse)
app.delete("/api/delete/:id",ctrl.deleteHouse)

//DB
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () => {
      console.log(`BAT IS BACK`);
    });
  })
  .catch(err => console.log("DATABASE MASSIVE CONNECTION ERROR", err));

//LISTEN
app.listen(SERVER_PORT,() => {
    console.log('Listening on port:${SERVER_PORT}.')
})