const joi = require('joi')


// Schema for validate data of Computer
const id = joi.number()
const CompName = joi.string()
const model = joi.string()
const Year = joi.number()
const Brand_id= joi.number()


const CreateComputer = joi.object({
    CompName: CompName.required(), 
    model: model.required(), 
    Year: Year.required(), 
    Brand_id: Brand_id.required()
})

module.exports = CreateComputer