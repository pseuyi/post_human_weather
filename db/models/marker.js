'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Marker = db.define('markers', {
  coords: Sequelize.ARRAY(Sequelize.DECIMAL),
  msg: Sequelize.STRING,
  img: Sequelize.STRING
})

module.exports = Marker
