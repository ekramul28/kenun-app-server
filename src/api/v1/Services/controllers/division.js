const { divisionSchemaModel } = require('../../../../models/index')

const Division = async (req, res) => {
    const result = await divisionSchemaModel.find().select({
        name: 0,
        url: 0
    })
    res.send(result);
    // console.log(result)
}


module.exports = Division