const  Computer   = require('../models/computer')

const boom = require('@hapi/boom')

class ComputerService{

    init(){ }

    async GetComputers( page=0, size=5 ){
 
        const options = {
            limit: size, 
            offset: page*size 
        }
        const computers = await Computer.findAll( options )
         if(!computers){
            throw boom.notFound('Data not found')
         }
          return computers
    }
    async CreateComputers (data){
        const computer = await Computer.create(data)
         if(!computer){
            throw boom.notFound('Not created')
         }
        return computer

    }
    
    async UpdateComputer(id, data){
        const computer = await Computer.findOne( { where: { id }})

        if(!computer){
            throw boom.notFound('Computer not found for edit')
        }
        computer.set(data)
        await computer.save()

        return computer
    }

    async DeleteComputer(id){
        const computer = await Computer.destroy({ where: { id }})

        if (!computer){
            throw boom.notFound('Computer not found')
        }
        return { "message": "Delete computer sucesfully"}
    }
    async GetOneComputer(id){
        const computer = await Computer.findOne({ where: { id }})
        if(!computer){
            throw boom.notFound('Computer not found')
        }
        return computer
    }
    async GetAll_brand( id, req ){

        const options = { 
            limit : req.limit, 
            offset : req.limit * req.offset
        }

        const computers = await Computer.findAll(  options, { where: { Brand_id: id}}  )
 
        if(!computers){
            throw boom.notFound('Not computers found')

        }
        return computers 
    }
}

module.exports = ComputerService 