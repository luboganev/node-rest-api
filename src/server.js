import express from 'express';

let app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});