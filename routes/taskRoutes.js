const { createTaskValidator, updateTaskValidator } = require('../validators/taskValidator');

const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController');
const { createTaskValidator, updateTaskValidator } = require('../validators/taskValidator');
const authMiddleware = require('../middleware/auth')

router.use(authMiddleware);

router.post('/api/tasks', createTaskValidator, taskController.createTask);
router.put('/api/tasks/:id', updateTaskValidator, taskController.updateTask);
router.delete('/api/tasks/:id', taskController.deleteTask);
router.get('/api/tasks', taskController.getTasks);

module.exports = router;