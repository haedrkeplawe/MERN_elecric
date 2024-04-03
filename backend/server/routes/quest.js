const express = require("express")
const router = express.Router()
const quest_controller = require('../controller/quest_controller')
const requireAuth = require("../middleware/requireAuth")

router.use(requireAuth)
// GET
router.route("/").get(quest_controller.getPage)
    .post(quest_controller.getPage)

//////////////////////
router.post("/add", quest_controller.createQusest)

router.route("/add-old/:id").get(quest_controller.getOneQusest)
    .patch(quest_controller.updateQusest)

router.delete("/delete/:id", quest_controller.deleteQusest);

module.exports = router