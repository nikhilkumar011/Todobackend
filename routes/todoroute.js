const express = require('express');
const router = express.Router()
const {getAllTodos,getTodoById,createTodo,deleteTodo,toggleStatus} = require('../controllers/todocontroller.js')

router.get('/',getAllTodos)

router.get('/:id',getTodoById)

router.post('/',createTodo)

router.delete('/:id',deleteTodo)

router.put('/:id',toggleStatus)



module.exports = router;