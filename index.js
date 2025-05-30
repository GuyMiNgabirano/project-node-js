const express = require('express');

const app = express();
const port = 3000;

// Afficher le message "Bonjour, le monde!" sur la page d'acceuil
app.get('/', (req, res) => {
    res.send('<h2>Bonjour, le monde!</h2>');
});

// Afficher le message "A propos de nous" sur la page about
app.get('/about', (req, res) => {
    res.send('<h1>A propos de nous</1>');
});

app.listen(port, () => {
    console.log('Serveur en cours d\'écoute sur http://localhost:'+port);
})