const router = require('express').Router()
const Accessory = require('../db/models/accessory')
const Console = require('../db/models/console')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const accessory = await Accessory.findAll({
      include: {
        model: Console
      }
    })
    res.json(accessory)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const accessoryId = req.params.id
    const singleAccessory = await Accessory.findOne({
      where: {
        id: accessoryId
      }
    })
    res.json(singleAccessory)
  } catch (error) {
    next(error)
  }
})
