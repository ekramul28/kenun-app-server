const districtScma = require('../../../../models/districtsSchma')

const district = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const query = { division_id: id }
    const result = await districtScma.find(query);
    res.send(result);
}
module.exports = district