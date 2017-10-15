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
//
// const MONGO_URL = 'mongodb://localhost:27017/conhecimento-livre-dev'
// app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))
// mongoose.connect(app.get('MONGO_URL'))
//
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
