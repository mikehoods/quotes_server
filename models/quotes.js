const {Schema, model} = require('mongoose')

const quoteSchema = new Schema({
    name: String,
    quote: String,
    slug: String,

}, {timestamps: true}
)

const Quote = model('Quote', quoteSchema)

module.exports = Quote