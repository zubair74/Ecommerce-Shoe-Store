const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name: {
    type: String 
  },
  type: {
    type: String
  },
  link: {
    type: String
  },
  price:{
    type: String
  }
},{ collection: 'products' });

const Data = mongoose.model("Data", DataSchema);
module.exports = Data;