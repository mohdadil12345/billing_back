
const mongoose = require("mongoose")

const itemSchema = ({
    name: String,
    price: { type: Number, min: 1},
})


const itemModel = mongoose.model("item", itemSchema)

module.exports = {
    itemModel
}