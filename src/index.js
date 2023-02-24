const express = require('express')
const sequelize = require('./database/connection')

const  BoomError = require('./middlewares/ErrorHandler')
const BrandRouter = require('./Routers/BrandRouters')
const ComputerRouter = require('./Routers/ComputerRouter')

const app = express()

// middelwares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Routers
app.use('/Brands', BrandRouter)
app.use('/Computers', ComputerRouter)


// Error middlewares 
app.use(BoomError)


// Running the server 
app.listen(process.env.PORT || 3000, async ()=>{

    // the next line can be deleted after the first execution
    await sequelize.sync ( { force : false})
    console.log('server is runnin on port', process.env.PORT || 3000)
})