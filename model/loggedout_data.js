const mongoose = require('mongoose');

const loggedout_Schema = new mongoose.Schema({
  userId:{
    type: String
  },
  userItems:{
    type: Array,
    "default" : [] 
  }
},{ collection: 'logged_out_users' });

const loggedout_Data = mongoose.model("loggedout_Data", loggedout_Schema);
module.exports = loggedout_Data;