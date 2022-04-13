const express = require('express')
const router = express.Router()
const Quote = require('../models/quotes.js')

router.post('/', async (req, res) => {
    try {
        const newQuote = Quote.create(req.body.quote)
        res.status(200).json(newQuote)
    } catch(error) {
        res.status(400).json(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const quotes = await Quote.find({})
        res.status(200).json(quotes)
    } catch(error) {
        res.status(400).json(error)
    }
})

router.get('/random/', async (req, res) => {
    try {
        const quote = await Quote.aggregate([{ $sample: { size: 1 }}])
        res.status(200).json(quote)
    } catch(error) {
        res.status(400).json(error)
    }
})