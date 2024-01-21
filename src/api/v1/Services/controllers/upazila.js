const upazilasSchema = require('../../../../models/upazilas')
const upazilas = async (req, res) => {
    const id = req.params.id;
    const query = { district_id: id }
    const result = await upazilasSchema.find(query);
    res.send(result);
}

module.exports = upazilas