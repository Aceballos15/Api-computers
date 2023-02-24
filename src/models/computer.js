const sequelize = require('../database/connection')
const { DataTypes } = require('Sequelize')


// define a table for a computer
const Computer = sequelize.define('Computer', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    CompName: {
        type : DataTypes.STRING, 

    }, 
    model: {
        type: DataTypes.STRING
    }, 
    Year: {
        type: DataTypes.INTEGER
    }
})



module.exports = Computer