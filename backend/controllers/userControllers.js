const User = require('../models/userModel');
const jwt = require('jsonwebtoken')
const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}
//login User
const loginUser = async(req,res)=>{
    const {email,password} =req.body

    try{
        const user = await User.login(email,password)

        const token = createToken(user._id)
        // await user.save();
        res.status(200).json({email,token})

        // res.status(201).json({ message: ' created successfully' });
    }
    catch(error){
        res.status(400).json({error:error.message})
    }

}
//signup User
const signupUser = async(req,res)=> {
    const {fname,email,password} = req.body

    try{
        const user = await User.signup(fname,email,password)

        const token = createToken(user._id)
        res.status(200).json({fname,email,token,mssg :'signup user'})

    }
    catch(error){
        res.status(400).json({error:error.message})
    
    } 
}
const checkUser = async(req,res)=>{
    const email = req.params.email
    try {
        const user = await User.findOne({ email });
        res.json(user);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

module.exports = {signupUser,loginUser,checkUser}
