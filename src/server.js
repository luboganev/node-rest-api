import express from 'express';
import { people } from './people.js';

let app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.get('/people', (req, res) => {
    res.json(people);
});

app.get('/people/:name', (req, res) => {
    let person = people.find(person => person.name === req.params.name);
    if (person) {
        res.json(person);
    } else {
        res.status(404).send('Person not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});