//external imports 
const bcrypt = require('bcrypt')

//internal imports 
const User = require('../models/People')




//get user page
function getUsers(req,res,next){
    res.render('index')
}


//add user 
async function addUser(req,res,next){
    let newUser;
    const hasedPassword =await bcrypt.hash(req.body.password,10)

    if(req.files && req.files.length>0){
        newUser = new User({
            ...req.body,
            avatar:req.files[0].filename,
            password:hasedPassword
        })
    }else{
        newUser = new User({
            ...req.body,
            password:hasedPassword
        })
    }

    try{
        const result = await newUser.save();
        res.status(200).json({
            message:'User was successfully added'
        })
        console.log(result)
    }catch(err){
        res.status(500).json({
            errors:{
                common:{
                    msg:'Unknown error occured'
                }
            }
        })
    }

}










module.exports ={
    getUsers,
    addUser
}