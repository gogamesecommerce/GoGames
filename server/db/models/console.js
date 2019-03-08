const Sequelize = require('sequelize')
const db = require('../db')

const Console = db.define('console', {
  name: {
    type: Sequelize.STRING
  },
  companyName: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  stock: {
    type: Sequelize.INTEGER
  }
})

module.exports = Console
