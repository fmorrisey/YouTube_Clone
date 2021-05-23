const router = require("express").Router();
const initPage = require("../middlewares/paging.middleware").initPage;
const commentsController = require("../controller/comments.controller");

// router.route("/comment/create").get(initPage, commentsController.getComments);

router.get("/", commentsController.getComments);

router.post("/create", commentsController.createComment);

module.exports = router;
