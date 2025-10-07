const Task = require('../models/Task')

async function createTask(data, userId) {
    const task = new Task({...data, createdBy: userId});
    await task.save();
    return task;
}

async function updateTask(taskId, data, userId) {
    const task = await Task.findOneandUpdate(
        { _id: taskId, createdBy: userId },
        data,
        { new: true }
    );
    return task;
}

async function deleteTask(taskId, userId){
    const task = await Task.findOneandDelete(
        { _id: taskId, createdBy: userId }
    );
    return task;
}

async function getTasks(userId) {
    return await Task.find({ createdBy: userId })
}

module.exports = { createTask, updateTask, deleteTask, getTasks }