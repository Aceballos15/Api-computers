

// Middleware of errors

const BoomError = (err, req, res, next) =>{
    if (err.isBoom){
        const { output } = err; 
        res.status( output.statusCode ).json( output.payload )
    }
    next(err)
}


module.exports = BoomError  