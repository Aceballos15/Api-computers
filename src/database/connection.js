const Sequelize = require('Sequelize')

const sequelize = new Sequelize('Ordenadores', 'postgres', 'aceballos', {
    'host': 'localhost',
    'dialect': 'postgres',
})

module.exports = sequelize 