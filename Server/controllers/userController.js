
const User = require('../models/usersModel');

exports.addUsers = async (req, res) => {
    try {
        const user = new User(req.body)
        user.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json(err)
    }
}

exports.getUsers = async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json(user)
    }
    catch (error) {
        res.status(400).json(error)
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        user.deleteOne()
        res.status(200).json("User Deleted")
    } catch (err) {
        res.status(400).json(err)
    }
}