// Etape 1 :
const fs = require("fs");

// 1. Création d'un fichier document avec un message
fs.writeFileSync("document.txt", "Iwanyu murakunda kuryama mu gitondo");

// 2. Lecture du fichier document et affichage de son contenu
const content = fs.readFileSync("document.txt", "utf-8");
console.log(content);

// Etape 2 :
const { multiply } = require('./functions');
console.log(multiply(10, 2));

// Etape 3 :
const { writeFileSync } = require('fs');

const modeData = [
    {id: 1, name: 'Guy', age: 30}
]
const modData = writeFileSync('data.json', JSON.stringify(modeData, null, 2));

// Etape 4 : récupération de données depuis une API avec postman-request
const request = require('postman-request');

request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data);
});

// Etape 5 : récupération de données depuis une API avec fetch

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data));

const parameters = {
    access_key: '67c9b72b823267b2a6a8276a7d89a551',
    query: 'New york',
    units: 'b',
}

fetch('http://api.weatherstack.com/current?access_key='+parameters.access_key+'&query='+parameters.query+'&units='+parameters.units)
    .then(response => response.json())
    .then(data => console.log(data));