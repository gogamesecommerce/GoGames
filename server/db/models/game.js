const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
  name: {
    type: Sequelize.STRING
  },
  publisher: {
    type: Sequelize.STRING
  },
  developer: {
    type: Sequelize.STRING
  },
  playStationFour: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  xBoxOne: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  nintendoSwitch: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  pc: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  genre: {
    type: Sequelize.STRING
  },
  multiplayer: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  description: {
    type: Sequelize.TEXT
  },
  releaseDate: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  },
  stock: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Game
