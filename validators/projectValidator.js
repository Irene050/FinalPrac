const { body } = require('express-validator');

const createProjectValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').optional().isString(),
];

module.exports = { createProjectValidator }