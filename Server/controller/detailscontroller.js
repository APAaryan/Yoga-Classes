const db = require('../database/db');

const userdetails = async (req,res)=>{
    try{
        const email=req.query.id;
        db.query("SELECT * from user_details where email= ?",email,(err,result)=>{
            
            if(result.length===0){
                return res.status(400).json({msg:"Wrong Email"})
            }
            else{
                return res.status(200).json(result);
            }
            
        })
    }
    catch{
        return res.status(500).json({msg:err.message});
    }
}

module.exports = {userdetails};