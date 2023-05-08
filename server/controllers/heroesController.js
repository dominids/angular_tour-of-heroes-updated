const asyncHandler = require("express-async-handler");
const Hero = require("../models/heroModel");
//@desc Get all Heros 
//@route GET /api/heroes
//@access  private
const getHeroes = asyncHandler(async (req, res) => {
    const Heroes = await Hero.find({ user_id: req.user.id });
    res.status(200).json(Heroes);
    
});

//@desc Create New Hero
//@route POST /api/heroes
//@access  private
const createHero = asyncHandler(async (req, res) => {
    console.log("The req body is:", req.body);
    const { name, clas } = req.body;
    if (!name || !clas) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const hero = await Hero.create({
        name,
        clas,
        user_id: req.user.id
    })
    res.status(201).json(hero);
});
//@desc Get Hero
//@route GET /api/heroes/:id
//@access  private
const getHero = asyncHandler(async (req, res) => {
    const hero = await Hero.findById(req.params.id);
    if (!Hero) {
        res.status(404);
        throw new Error("Hero not found");
    }
    res.status(200).json(hero);
});

//@desc Update Hero
//@route POST /api/heros/:id
//@access  private
const updateHero = asyncHandler(async (req, res) => {
    const hero = await Hero.findById(req.params.id);
    if (!hero) {
        res.status(404);
        throw new Error("Hero not found");
    }
    if (hero.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permisson to update other user contacts");
    }
    const updatedHero = await Hero.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedHero);
});

//@desc Delete Hero
//@route DELETE /api/heroes/:id
//@access private
const deleteHero = asyncHandler(async (req, res) => {
    const hero = await Hero.findById(req.params.id);
    if (!hero) {
        res.status(404);
        throw new Error("Hero not found");
    }
    if (hero.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permisson to update other user heroes");
    }
    await Hero.deleteOne({ _id: req.params.id });
    res.status(200).json(hero);
});


module.exports = {
    getHeroes,
    createHero,
    getHero,
    updateHero,
    deleteHero
};