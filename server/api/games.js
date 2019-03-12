const router = require('express').Router()
const {Game} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const games = await Game.findAll()
    res.json(games)
  } catch (error) {
    next(err)
  }
})
