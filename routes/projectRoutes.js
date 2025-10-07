const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { createProjectValidator } = require('../validators/projectValidator');
const authMiddleware = require('../middleware/auth');  

router.use(authMiddleware);

router.post('/api/projects', createProjectValidator, projectController.createProject);
router.get('/api/projects', projectController.getProjects);

module.exports = router;