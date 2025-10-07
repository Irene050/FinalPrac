const Project = require('../nodels/Project')

async function createProject(data, userId) {
    const project = new Project({ ...data, createdBy: userId });
    await project.save();
    return project;
}

async function getProjects(userId) {
    return await Project.find(
        { createdBy: userId }
    ).populate('tasks');
}

module.exports = { createProject, getProjects }