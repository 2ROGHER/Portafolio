/**
 * 
 * @param {*} req string
 * @param {*} res string
 * import Router object
 
 */

const { Router } = require('express');
const getSkillsHandler = require('../handlers/getSkillsHandler');
const getProjectsHandler = require('../handlers/getProjectsHandler');
const router = Router();
router.use('/api/skills',getSkillsHandler);
router.use('/api/projects', getProjectsHandler);
module.exports = router;