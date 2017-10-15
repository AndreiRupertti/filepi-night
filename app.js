const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const sassMiddleware = require('node-sass-middleware')

const app = express()

app.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public/css'),
    force: true,
    outputStyle: 'compressed',
    prefix:  '/css'
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  const headline = {headline: "Descubra como será a noite de Filépi"}
  res.render('index', {headline})
})


app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
