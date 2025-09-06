import jwt from 'jsonwebtoken';

const authentication = async (req,res,next) => {
    const authHeader = req.headers["authorization"];
    if(!authHeader){
        return res.status(400).json({
            message: "send auth or login first",
            success: false
        })
    }
    const token = authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message: "No token generated",
            success: false
        })
    }

    jwt.verify(token,process.env.SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({
                message: "Invalid User",
                success: false
            })
        }
        req.user = user;
        next();
    })
}

export default authentication;