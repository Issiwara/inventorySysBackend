const taskSchema = require('../model/TaskShema')

const getTask = async (req, res) => {
    try {
        const tasks = await taskSchema.find();
        res.send(tasks)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const setTask = async (req, res) => {
    const newTask = new taskSchema(req.body);
    try {
        if (newTask.ITEM_NUMBER && newTask.ITEM_NAME && newTask.DESCRIPTION && newTask.ITEM_QUNATITY && newTask.ITEM_PRICE && newTask.ITEM_MATERIAL) {
            await newTask.save()
            res.status(200).json({ msg: "Task Added Sufully" })
        }
        
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = taskSchema.findById(taskId);
        if (task) {
            await taskSchema.deleteOne({ _id: taskId })
            res.status(200).json({ msg: "Task Deleted Succesfully" })
        } else {
            res.status(404).json({ msg: "Task not found" })
        }
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


const updateTask = async (req, res) => {
    try {
        const updateTask = req.body;
        const task = taskSchema.findById(updateTask._id);
        if (task) {
            await taskSchema.findByIdAndUpdate(updateTask._id, { ITEM_NUMBER: updateTask.ITEM_NUMBER, ITEM_NAME: updateTask.ITEM_NAME, DESCRIPTION: updateTask.DESCRIPTION, ITEM_QUNATITY: updateTask.ITEM_QUNATITY,ITEM_PRICE: updateTask.ITEM_PRICE,ITEM_MATERIAL: updateTask.ITEM_MATERIAL,   status: res.status(200).json({ msg: "Task Updated Succesfully" }) })
        } else {
            res.status(404).json({ msg: "Task not found...!" })
        }
    }catch (error) {
        res.status(500).json({ msg: error })
    }
}


module.exports = {
    getTask,
    setTask,
    deleteTask,
    updateTask
}