const Quset = require("../models/customerSchema");

const getPage = async (req, res) => {
    const qusets = await Quset.find({})
    res.status(200).json(qusets)
}

const getOneQusest = async (req, res) => {
    const id = req.params.id
    const qusets = await Quset.findById(id)
    res.status(200).json(qusets)
}
const createQusest = async (req, res) => {
    try {
        const quest = await Quset.create(req.body)
        res.status(200).json(quest)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const updateQusest = async (req, res) => {
    const { id } = req.params
    const quest = await Quset.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    res.status(200).json(quest)
}
const deleteQusest = async (req, res) => {
    const { id } = req.params
    const quest = await Quset.findOneAndDelete({ _id: id })
    res.status(200).json(quest)
}

module.exports = {
    getPage,
    createQusest,
    updateQusest,
    deleteQusest,
    getOneQusest
}