const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express();
const port = 5500;

app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })




app.get('/post', (req, res)=> {
    res.render('form')
})

app.post('/form', urlencodedParser, [
    check('nameInput', 'Нет имени')
        .exists(),
    check('quantityInput', 'Нет количества людей')
        .exists()
], (req, res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
       
        const alert = errors.array()
        res.render('form', {
            alert
        })
    }
})

app.listen(port, () => console.info(`App listening on port: ${port}`))