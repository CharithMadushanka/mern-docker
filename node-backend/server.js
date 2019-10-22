require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Todo = require('./models/todo')


// mongoose.connect('mongodb://mongo:27017/todos', { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))

// Connection to DB
mongoose.connect('mongodb://mongodb/todos')
    .then(() => {
      console.log('Backend Started');
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });

app.use(express.json())

//Getting all
app.get('/api/todos', async(req,res) => {
    const todos = await Todo.find();
    res.json(todos)
})

//Creating one
app.post('/api/todos', async (req,res) => {
    const todo = new Todo({
        description: req.body.description,
        date: req.body.date
      })

    const newTodo = await todo.save()
    res.status(201).json(newTodo)
})

//Updating one
app.patch('/api/todos/:id', async (req,res) => {
    const todo = await Todo.findById(req.params.id)
    todo.completed = req.body.completed;

    const updatedTodo = await todo.save()
    res.json(updatedTodo)
})

//Deleting one
app.delete('/api/todos/:id', async (req,res) => {
    const todo = await Todo.findById(req.params.id)
    todo.remove();
    res.json({ message : 'Todo deleted successfully' })
})

app.listen(6200, () => console.log('Server started on port 6200'))