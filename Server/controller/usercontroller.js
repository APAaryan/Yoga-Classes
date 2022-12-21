const db = require('../database/db');


const signupUser = async (req,res)=>{

        const data=req.body;

        db.query("INSERT INTO user_details SET ?",data,(err,result)=>{
            if(err){
                return res.status(400).json({msg: err});
            }
            else{
                res.send(result);
                console.log("Successfully Inserted");
            }
        })
}

 const loginUser = (req,res) =>{
    try{
        const email=req.body.email
        db.query("SELECT * from user_details where email= ?",email,(err,result)=>{
            if(err){
                res.send(err);
            }
            else{
                if(req.body.password==result[0].password){
                    return res.status(200).json({msg: 'Login is successful'});
                }
                else{
                    return res.status(400).json("Password does not match");
                }
            }
        })
    }
    catch(error){
        return res.status(500).json({msg: 'Error while Login'});
    }
}

module.exports = { signupUser,loginUser }