const todoModel = require('../models/todoModel.js')

exports.getAllTodos = async (req, res) => {
    const data = await todoModel.find();

    if (data.length === 0) {
        return res.status(404).json({ "message": "No todos available" });
    }

    res.status(200).json(data)
}

exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await todoModel.findById(id);
        if (!data) {
            return res.status(404).json({ "message": "No todo with this id exists" })
        }

        return res.status(200).send(data)
    }
    catch (error) {
        return res.status(400).json({ "message": "invalid todo id format" })
    }
}

exports.createTodo = async (req, res) => {
    const todo = req.body;

    if (!todo.todoname) {
        return res.status(400).send("all fields are required")
    }
    const newdata = await todoModel.create({ todoname: todo.todoname, status: false });

    res.status(200).json(newdata);
}

exports.deleteTodo = async (req,res)=>{
    const {id} = req.params;
    const data = await todoModel.findByIdAndDelete(id);
    if(!data){
        return res.status(404).json({"message":"No todo with this id exists"})
    }

    return res.status(200).json(data);
}

exports.toggleStatus = async (req,res)=>{
    const {id} = req.params;
    const data = await todoModel.findById(id);
    if(!data){
        return res.status(404).json({"message":"No todo with this id exists"})
    }
    
    data.status = !data.status;
    await data.save();

    return res.status(200).send(data);

}
