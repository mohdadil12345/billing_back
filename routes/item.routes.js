

const express = require("express")
const { itemModel } = require("../models/item.model")

const itemRouter = express.Router()


// post
itemRouter.post("/add", async (req, res) => {

    try {

        const data = new itemModel({ ...req.body })
        await data.save()
        res.status(200).json({ msg: "posts added" })

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})



// get
itemRouter.get("/", async (req, res) => {

    try {

        const data = await itemModel.find()
        res.status(200).json(data)

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})




itemRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params
    try {

        await itemModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).json({ msg: "users updated" })

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})




//  delete
itemRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    try {

        await itemModel.findByIdAndDelete({ _id: id }, req.body)
        res.status(200).json({ msg: "users deleted" })

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})







module.exports = {
    itemRouter
}