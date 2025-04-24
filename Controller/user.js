const User=require('../Models/user');

async function handlegetUserData(req,res){
    const dbAll=await User.find({});
    res.json(dbAll);
}
async function handlegetUserDatabyId(req,res){
    try{
    const user=await User.findOne({id:req.params.id});
    if(!user){
        res.status(404).json({msg:"No user found"});
    }
    res.json(user);
} catch(err){
    console.error("Error fetching ID:",err);
    res.status(505).json({msg:"Internal Server Error"});
    }
}
async function handlecreateUser(req,res) {
    try{
    const body=req.body;
   const data= await User.create({
        id:body.id,
        name:body.name,
        marks:body.marks,
    })
    return res.json({msg:'success', data:data});
} catch(err){
    if(err.code===11000){
        return res.status(400).json({msg:`User with id: ${req.body.id} already exists`});
    }
}
}

async function handledeleteUser(req,res){
    const user=await User.findOneAndDelete({id:Number(req.params.id)});
    if(!user){
        res.status(404).json({msg:'couldnt find user'});
    }
    res.json({msg:"user deleted"});
}

async function handleeditUser(req,res){
    const user=await User.findOneAndUpdate({id:req.params.id},
        {name:req.body.name,
        marks:req.body.marks},
    {new:true}
)
if(!user){
    res.status(404).json({msg:'no user exist'});
}
res.json({msg:'sucess', uuser:user});

}

module.exports={handlegetUserData,
                handlegetUserDatabyId,
                handlecreateUser,
                handledeleteUser,
                handleeditUser,
}