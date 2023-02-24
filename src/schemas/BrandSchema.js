const joi = require('joi')


// Schema for validate data of Brand
const id = joi.number()
const BrandName = joi.string()
const City = joi.string()

const CreateBrand = joi.object({
    BrandName: BrandName.required(), 
    City: City.required()
})


module.exports = CreateBrand
