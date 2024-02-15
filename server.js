const express = require('express');
const path = require('path');

const app = express();

// Define o diretório onde estão os arquivos estáticos (CSS, JavaScript, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define uma rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
