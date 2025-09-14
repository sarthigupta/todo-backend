import Todo from "../model/todo.model.js";

export const createTodo = async (req, res) => {
    const { title, description } = req.body;
    console.log(req.body);
    
    if (!title || !description) {
        return res.status(400).json({
            message: "something is missing",
            success: false
        })
    }

    await Todo.create({ title, description });
    return res.status(201).json({
        message: "todo created",
        success: true
    })
}

export const updateTodo = async (req, res) => {
    const  {id} = req.params;
    console.log(id);
    
    if (!id) {
        return res.status(400).json({
            message: "enter the id",
            success: false
        })
    }
    const isTodo = await Todo.findOne({_id: id });
    if (!isTodo) {
        return res.status(400).json({
            message: "todo doesn't exist",
            success: false
        })
    }

    await Todo.updateOne({ _id: id }, {
        $set: {
            done: true
        }
    })
    return res.status(201).json({
        message: "todo updated successfully",
        success: true
    })
}

export const deleteTodo = async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({
            message: "title missing",
            success: false
        })
    }
    await Todo.findOneAndDelete({ title });
    return res.status(201).json({
        message: "todo deleted successfully",
        success: true
    })
}

export const getTodo = async (req, res) => {
    try {
        const result = await Todo.find();
        return res.json({
            result
        })
    } catch (error) {
        console.log(error);
        
    }
}

