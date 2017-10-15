const mongoose = require('mongoose')

const Schema = mongoose.Schema

const nightSchema = new Schema({
  headline: String,
  param: String,
})

module.exports = mongoose.model('Nights', nightSchema)
