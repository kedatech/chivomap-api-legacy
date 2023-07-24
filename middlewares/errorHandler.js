function boomErrorHandler(err, req, res, next) {
    if(err.isBoom){
        const { output} = err;
        res.status(output.statusCode).json(output.payload)
    }
}

module.exports = {
    boomErrorHandler
}