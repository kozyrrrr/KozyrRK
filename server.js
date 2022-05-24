const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/form.html`);
});


app.listen(5500, () => {
    console.log('Application listening on port 5500!');
});