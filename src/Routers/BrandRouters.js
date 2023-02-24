const { Router } = require('express')

const router = Router()

const Brandservice = require('../services/BrandServices')
const ValidatorHandler = require('../middlewares/ValidatorHandler')
const  CreateBrand  = require('../schemas/BrandSchema')


const service = new Brandservice()

router.get('/', async (req, res, next)=>{
    try {
        const data = await service.BrandList( req.query.page, req.query.size )
        res.json(data)
    } catch (error) {
        res.json(error.message)
    }
    
} )

router.post('/create', 
ValidatorHandler(CreateBrand, 'body'),
async (req, res, next)=>{
    try {
        const data = await service.CreateBrand(req.body)
        res.json(data)
    } catch (error) {
        res.json(error.message)
    }
    
} )

router.put('/update/:id', async (req, res, next)=>{

    try {
        const data = await service.UpdateBrand(req.params.id, req.body)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

router.delete('/delete/:id', async (req, res, next)=>{

    try {
        const data = await service.DeleteBrand(req.params.id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

router.get('/:id', async (req, res, next)=>{

    try {
        const data = await service.GetOneBrand(req.params.id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})



module.exports = router