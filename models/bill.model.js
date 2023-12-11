
const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'item' },
      quantity: { type: Number, min: 1 },
    },
  ],
});


const billModel = mongoose.model("bill", billSchema)

module.exports = {
    billModel
}
