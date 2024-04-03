const Quset = require("../models/customerSchema");

const getPage = async (req, res) => {
    const qusets = await Quset.find({})
    res.status(200).json(qusets)
}

const getOneQusest = (req, res) => {
    Quset.findById(req.params.id)
        .then((result) => {
            res.json({ result });
        })
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
    const workout = await Quset.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    res.status(200).json(workout)
}
const deleteQusest = async (req, res) => {
    const { id } = req.params
    const workout = await Quset.findOneAndDelete({ _id: id })
    res.status(200).json(workout)
}

module.exports = {
    getPage,
    createQusest,
    updateQusest,
    deleteQusest,
    getOneQusest
}