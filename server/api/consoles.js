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

router.get('/:id', async (req, res, next) => {
  try {
    const consoleId = req.params.id
    const singleConsole = await Console.findOne({
      where: {
        id: consoleId
      }
    })
    res.json(singleConsole)
  } catch (err) {
    next(err)
  }
})
