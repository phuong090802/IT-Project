const groupReq = require('./routes/routes.groups');

const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/', groupReq);

app.listen(PORT);