/**
 * 
 * @param {*} data json
 * @param {*} model object
 */

module.exports = async (data, model) => {
    try {
        data.forEach(async (item) => {
            await model.create(item);
        });
    } catch (error) {
        throw new Error(error.message);
    }
}