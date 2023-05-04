const asyncHandler = require("express-async-handler");
const User = require("../models/heroModel");
//@desc Get all Users 
//@route GET /api/users
//@access  public
const getUsers = asyncHandler(async (req, res) => {
    const Users = await User.find();
    res.status(200).json(Users);
});

//@desc Create New User
//@route POST /api/users
//@access  public
const createUser = asyncHandler(async (req, res) => {
    console.log("The req body is:", req.body);
    const {name, username, email, phone } = req.body;
    if (!username || !name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const user = await User.create({
        name,
        username,
        email,
        phone,
    })
    res.status(201).json(user);
});
//@desc Get User
//@route GET /api/users/:id
//@access  public
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!User) {
        res.status(404);
        throw new Error("User not found");
    }
    res.status(200).json(user);
});

//@desc Update User
//@route POST /api/users/:id
//@access  public
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!User) {
        res.status(404);
        throw new Error("User not found");
    }

    const updatedUser = await User.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedUser);
});

//@desc Delete User
//@route DELETE /api/users/:id
//@access public
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json(user);
});


module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
};