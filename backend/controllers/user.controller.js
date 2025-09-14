import User from "../model/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signUp = async (req,res) => {
    const {firstName,lastName,email,password} = req.body;
    if(!firstName || !lastName || !email || !password){
        return res.status(400).json({
            message: "something is missing",
            success: false
        })
    }

    const result = await User.findOne({email});
    if(result){
        return res.status(400).json({
            message: "User exists",
            success: false
        })
    }
    const hashedPassword = await bcrypt.hash(password,10)
    await User.create({firstName,lastName,email,password: hashedPassword});

    return res.status(201).json({
        message: "User Created",
        success: true
    })
}


export const login = async (req,res)=> {
    const {email,password} = req.body;
    console.log(req.body.email);
    
    if(!email || !password){
        return res.status(400).json({
            message: "Enter email and password",
            success: false
        })
    }

    const user = await User.findOne({email});
    console.log(user);
    
    if(!user){
        return res.status(400).json({
            message: "User doesn't exist",
            success: false
        })
    }
    const isPassword = await bcrypt.compare(password,user.password);
    console.log(isPassword);
    
    if(!isPassword){
        return res.status(400).json({
            message: "Invalid Password",
            success: false
        })
    }
    const payload = {
        id: user._id,
        email: user.email
    }
    const token = jwt.sign(
        payload,
        process.env.SECRET,
        {expiresIn: "1h"}
        
    )
    console.log(token);
    
    return res.status(200).json({
        message: "Login Successfull",
        token,
        success: true
    })
    
    


}

// export default {
//     login,
//     signUp
// };