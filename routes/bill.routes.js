

const express = require("express")
const { billModel } = require("../models/bill.model")

const billRouter = express.Router()


// post
// billRouter.post("/add", async (req, res) => {

//     try {

//         const data = new billModel({ ...req.body })
//         await data.save()
//         res.status(200).json(data)

//     } catch (err) {
//         res.status(400).json({ msg: err.message })
//     }
// })

// Assuming your route is /bills/add

billRouter.post('/add', async (req, res) => {
  try {
    const { quantity, item } = req.body;

    const newBill = new billModel({
      items: [{ item, quantity }],
    });

    const savedBill = await newBill.save();
    res.status(201).json(savedBill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



// get
billRouter.get("/", async (req, res) => {

    try {

        const data = await billModel.find()
        res.status(200).json(data)

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})



module.exports = {
    billRouter
}