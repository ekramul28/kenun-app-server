const { Schema, model } = require("mongoose");

const districtSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    bn_name: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
})

const districtSchemaModel = new model("District", districtSchema)
module.exports = districtSchemaModel