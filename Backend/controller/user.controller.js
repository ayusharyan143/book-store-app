// Here in  controller we define function here 

import User from "../modal/user.modal.js";
import bcryptjs from "bcryptjs";

export const signup = async (req , res)=>{
    
    try
    {
        const { fullname , email , password } = req.body ; 

        const user = await User.findOne({email});

        if(user)
        {
            return res.status(400).json({message: "User already exists"});
        }

        const hashPassword = await bcryptjs.hash(password,10);
        const creatUser = new User({
            fullname: fullname ,
            email: email ,
            password: hashPassword,
        });

        await creatUser.save();
        res.status(201).json({message: "User created successfully" , user:{
            _id: creatUser._id , 
            fullname: creatUser.fullname , 
            email: creatUser.email ,
        }});
        
    } 
    catch (error)
    {
        console.log("Error: "+ error.message);
        res.status(500).json({message: "Internal server error"});
    }

};


export const login = async( req , res ) => {
    try
    {
        const {email,password} = req.body ; 
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password);

        if(!user || !isMatch )
        {
            return res.status(400).json({message: " Invalid username and password "});
        }
        else 
        {
            return res.status(200).json({message: " Login successful ",user:{
                _id:user._id , 
                fullname: user.fullname , 
                email:user.email 
            }});
            
        }
    }
    catch(error)
    {
        console.log("Error: " + error.message );
        res.status(500).json({message: "Internal server error"});
    }
};