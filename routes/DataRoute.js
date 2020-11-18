const express = require('express');
const dataModel = require('../model/data')
const userModel = require('../model/User')

const logged_out_model = require('../model/loggedout_data');
// const loggedout_Data = require('../model/loggedout_data');


const router = new express.Router()


router.get('/data',async (req, res) => {
  try{
   const data = await dataModel.find({})
   if(data !== null){
       res.send(data)
   }
   
  //  console.log(data)
   }catch(e){
    console.log(e) ;
   }
   


})

router.get('/getProd',async (req, res) => {

  try{
   const data = await userModel.findById(req.query.ID)
   res.send(data)
  //  if(data !== null){
  //      res.send(data)
  //  }
   
   console.log(data)
   }catch(e){
    console.log(e) ;
   }
   


})

router.get('/loggedprod',async (req, res) => {


  try{
   const data = await logged_out_model.findOne({userId: req.query.ID})
   console.log(req.query.ID);
   res.send(data)
  //  if(data !== null){
  //      res.send(data)
  //  }
   
   console.log('fetcheddata',data)
   }catch(e){
    console.log(e) ;
   }
   


})




module.exports = router