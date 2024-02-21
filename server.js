const express = require('express');

const path = require('path');

const app = express();

require("dotenv").config();
require('./src/bs.js')


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;

const pictureRouter = require('./src/routes/picture.js');

app.use("/picture", pictureRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
