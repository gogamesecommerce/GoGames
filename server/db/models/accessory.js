const Sequelize = require('sequelize')
const db = require('../db')

const Accessory = db.define('Accessory', {
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  },
  company: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Accessory
