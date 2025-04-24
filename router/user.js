const express=require('express');
const {handlecreateUser,handlegetUserData,handlegetUserDatabyId,handledeleteUser,handleeditUser}=require('../Controller/user');
const router=express.Router();

router
    .route('/')
    .get(handlegetUserData)
    .post(handlecreateUser);

router.get('/:id',handlegetUserDatabyId);
router.delete('/del/:id',handledeleteUser);
router.patch('/edit/:id', handleeditUser);

module.exports=router;