const getProjectsController = require("../controllers/getProjectsController");

module.exports = async(req, res) =>{
    try {
        res.status(200).json(await getProjectsController());
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};