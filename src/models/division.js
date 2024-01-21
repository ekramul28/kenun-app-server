const { Schema, model } = require("mongoose");

const divisionSchema = new Schema({
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

const divisionModel = new model("Division", divisionSchema)
module.exports = divisionModel