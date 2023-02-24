const Brand = require('../models/brand')

const boom = require('@hapi/boom')

class Brandservice{
    init(){}

    async BrandList( page=0, size=3 ){

        const options = {
            limit : size, 
            offset: page * size
        }

        const Brands = await Brand.findAll( options  )
        if (!Brands){
            throw boom.notFound('Brands does not existst')
        }
        return Brands
    }

    async CreateBrand (data){
        const brand = await Brand.create(data)

        if(!brand){
            throw boom.notFound('Data is not valid')
        }
        return brand 
    }

    async UpdateBrand (id, data){
        const brand = await Brand.findOne({ where: { id }})

        if(!brand){
            throw boom.notFound('Brand not found')
        }

        brand.set(data)
        await brand.save()

        return this.BrandList()
    }

    async DeleteBrand(id){
        const brand = await Brand.destroy({ where: { id }})
        if(!brand){
            throw boom.notFound('Brand not found')
        }
        return { "message": "Delete Brand succesfully"} 
    }

    async GetOneBrand(id){
        const brand = await Brand.findOne({ where: { id }})
        if(!brand){
            throw boom.notFound('Brand not found')
        }
        return brand
    }
}

module.exports = Brandservice