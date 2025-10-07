const { body } = require('express-validator')

const createTaskValidator = [
    body('title').notEmpty().withMessage('Title is required.'),
    body('description').optional().isString()
]

const updateTaskValidator = [
    body('title').notEmpty().withMessage('Title cannot be empty.'),
    body('description').optional().isString()
]

module.exports = { createTaskValidator, updateTaskValidator }