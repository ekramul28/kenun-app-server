const { Schema, model } = require("mongoose");

const upazilasSchema = new Schema({
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

const upazilasModel = new model("Upazila", upazilasSchema)
module.exports = upazilasModel