const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  description: { type: String,required: true },

  completed: { type: Boolean,default: false },
  
  date: { type: String,required: true,default: Date.now }
})

module.exports = mongoose.model('Todo', todoSchema)