const sequelize = require('../database/connection')
const { DataTypes } = require('Sequelize')
const Computer = require('./computer')

// Construction of model "brand"
const Brand= sequelize.define('Brand', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    BrandName: {
        type : DataTypes.STRING
    }, 
    City: {
        type: DataTypes.STRING
    }
})

Brand.hasMany(Computer, {
    foreignKey : 'Brand_id', 
    sourceKey: 'id'
})

Computer.belongsTo(Brand, {
    foreignKey: 'Brand_id', 
    TarjetId : 'id'
})

module.exports = Brand 

