/**
 * 
 * @param {*} req string
 * @param {*} res string
 * import Router object
 
 */

const { Router } = require('express');
const getSkillsHandler = require('../handlers/getSkillsHandler');
const router = Router();
router.use('/api/skills',getSkillsHandler);
module.exports = router;