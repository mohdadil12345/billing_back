
const mongoose = require("mongoose")

const checkoutSchema = ({
    date: { type: Date, default: Date.now },
    totalcost: { type: Number, min: 0 },
})


const checkoutModel = mongoose.model("checkout", checkoutSchema)

module.exports = {
    checkoutModel
}