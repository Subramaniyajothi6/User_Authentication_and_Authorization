const errorRouter = (req,res,next) =>{
   return res.status(404).json({message:"page not found"})
}

module.exports = errorRouter;