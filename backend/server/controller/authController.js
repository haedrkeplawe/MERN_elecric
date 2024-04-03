const User = require("../models/User")
const jwt = require("jsonwebtoken")

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "3d" })
}

const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.login(username, password)

        const token = createToken(user._id)
        res.status(200).json({ username, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const register = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.signup(username, password)

        const token = createToken(user._id)

        res.status(200).json({ username, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const logout = async (req, res) => {
    res.clearCookie("token")
    res.json("logout")
}

module.exports = {
    login,
    register,
    logout
}