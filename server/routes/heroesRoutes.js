const express = require("express");
const router = express.Router();
const {
    getHeroes,
    createHero,
    getHero,
    updateHero,
    deleteHero
} = require("../controllers/heroesController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getHeroes).post(createHero);
router.route("/:id").get(getHero).put(updateHero).delete(deleteHero);

module.exports = router;