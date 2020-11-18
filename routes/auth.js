const router = require('express').Router()

const Users = require('../model/User')

const Joi = require("@hapi/joi");

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const logged_out_model = require('../model/loggedout_data')

const {registerValidation,loginValidation} = require('../validation')

router.post('/register', async (req,res)=>{
  console.log(req.body);
  
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message);

  // check if the email exists

  const emailExists = await Users.findOne({email: req.body.email})

  if(emailExists) return res.status(400).send('email already exists')

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password,salt)
  
    const user = new Users({
        
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,

    })
    try {
        const savedUser = await user.save();
        res.send(savedUser)
        // console.log(savedUser);
        res.send("Your account has been created successfully!");
      } catch (err) {
        res.status(400).send(err);
      }
})


router.post('/login',async(req,res)=>{
  // res.send('welcome to login route')
  console.log(req.body);

  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message);

  // check if the email exists

  const user = await Users.findOne({email: req.body.email})

  if(!user) return res.status(400).send({error: 'email or password doeesnt exist'})

  // check if password is correct

  const checkPassword = await bcrypt.compare(req.body.password, user.password)

  if(!checkPassword) return res.status(400).send({error:'password is not correct'})

  // res.send("login success")
  // user.chat_data
  
  // res.send(user.name)
  const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET);

  // res.header('auth-token',token).send(token)

  res.send({
    mytoken: token,
    status: "Success",
    name: user.name,
    User: user
  })
})




router.post('/additems',async(req,res)=>{
  console.log(req.body);
  
  Users.findByIdAndUpdate(req.body[0].userId, 
    {items:req.body}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log(data);
            // console.log("Data updated!");
        }
    });  

  
})


router.post('/logoutitems',async(req,res)=>{
  console.log('found data',req.body);


  const useralreadyexists = await logged_out_model.findOne({userId: req.body[0].userId})
  console.log('hello',useralreadyexists);

  if(useralreadyexists){
    logged_out_model.findByIdAndUpdate(useralreadyexists._id, 
      {userItems:req.body}, function(err, data) {
          if(err){
              console.log(err);
          }
          else{
              res.send(data);
              console.log('updated data',data);
              // console.log("Data updated!");
          }
      });  
  }
  
  else{

    const user = new logged_out_model({
          
      // name: req.body.name,
      // email: req.body.email,
      // password: hashedPassword,
  
      userId: req.body[0].userId,
      userItems: req.body
  
  })
  try {
      const savedUser = await user.save();
      res.send(savedUser)
      console.log(savedUser);
      res.send("Your account has been created successfully!");
    } catch (err) {
      res.status(400).send(err);
    }
  }



  
})

module.exports = router