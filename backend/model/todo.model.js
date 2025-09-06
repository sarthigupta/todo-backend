import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String,
        
    },
    done: {
        type: Boolean,
        default: false
    }
})

const Todo =  mongoose.model("Todo",todoSchema);

export default Todo;