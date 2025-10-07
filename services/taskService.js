const Task = require('../models/Task')

async function createTask(data, userId) {
    const task = new Task({...data, createdBy: userId});
    await task.save();
    return task;
}

module.exports = { createTask }