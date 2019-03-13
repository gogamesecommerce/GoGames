const router = require('express').Router()
const {Game} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const games = await Game.findAll()
    res.json(games)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const gameId = req.params.id
    const singleGame = await Game.findOne({
      where: {
        id: gameId
      }
    })
    res.json(singleGame)
  } catch (error) {
    next(error)
  }
})
