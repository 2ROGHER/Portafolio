const getSkillsController = require("../controllers/getSkillsController");

module.exports = async (req, res) => {
    try {
        res.json(await getSkillsController());
    } catch (error) {
        res.json({ message: error });
    }
};