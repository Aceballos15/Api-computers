const { Router } = require('express')

const router = Router()

const ValidatorHandler = require('../middlewares/ValidatorHandler')
const  CreateComputer  = require('../schemas/ComputerSchema')


const ComputerService = require('../services/ComputerServices')
const service = new ComputerService()


// Get all computers
router.get('/', async(req, res, next)=>{
    try{
        data = await service.GetComputers( req.query.page, req.query.size )
        res.json(data)
    }catch(error){
        res.json(error)
    }
} )

// create a new computer
router.post('/create', 
ValidatorHandler(CreateComputer, 'body'), 
async(req, res, next)=>{
    try{
        data = await service.CreateComputers( req.body )
        res.json(data)
    }catch(error){
        res.json(error)
    }
} )

// Update computer
router.put('/update/:id', async(req, res, next)=>{
    try{
        data = await service.UpdateComputer( req.params.id, req.body)
        res.json(data)
    }catch(error){
        res.json(error)
    }
} )

// delete computer
router.delete('/delete/:id', async(req, res, next)=>{
    try{
        data = await service.DeleteComputer( req.params.id)
        res.json(data)
    }catch(error){
        res.json(error)
    }
} )

// get one computer
router.get('/:id', async(req, res, next)=>{
    try{
        const data = await service.GetOneComputer( req.params.id )
        res.json(data)
    }catch(error){
        res.send(error)
    }
})


// got all computers of Brand
router.get('/Brand/:id', async (req, res, next)=>{
    try{
        console.log( )
        data = await service.GetAll_brand( req.params.id, req.query ) 
        res.json(data)
    }catch(error){
        res.json(error)
    }
})


module.exports = router 