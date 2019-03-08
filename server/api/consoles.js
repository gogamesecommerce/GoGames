const router = require('express').Router()
const {Console} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const consoles = await Console.findAll()
    res.json(consoles)
  } catch (err) {
    next(err)
  }
})
