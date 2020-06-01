const User = require('../models/user-model.js')

async function validateUserID (req, res, next) {
    const { id } = req.params;

    try{
        const user = await User.findById(id)
        // console.log('USER ID middleware', user)
        if(user){
            next()
        }
        else {
            res.status(404).json({ message: "Invalid Item ID." });
        }
    }
    catch(error){
        res.status(500).json({ message: "There was an error validating the user ID" });
    }
}

module.exports = validateUserID