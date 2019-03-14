const router = require('express').Router()
const {Accessory} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const accessory = await Accessory.findAll()
    res.json(accessory)
  } catch (error) {
    next(error)
  }
})
