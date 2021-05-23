const Comment = require("../models/comments.model");

exports.createComment = function (req, res) {
  console.log("createComment");
  const commentObj = {};
  if (req.body.content) {
    commentObj.content = req.body.content;
  }

  const comment = new Comment(commentObj);
  comment.user = req.user;

  return comment
    .save()
    .then(() => res.json("Comment Added"))
    .catch((err) => res.status(400).json("Error", err));
};

exports.getComments = function (req, res) {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json("Error: " + err));
};

// =================================================================
/*
exports.createComment = function (req, res, next) {
  console.log("createComment");
  const commentObj = {};
  if (req.body.content) {
    commentObj.content = req.body.content;
  }

  const comment = new Comment(commentObj);
  comment.user = req.user;

  return comment
    .save()
    .then((comment) => {
      if (comment.user.comments == null) {
        comment.user.comments = [comment];
      } else {
        comment.user.comments.push(comment);
        comment.user.save().then((user) => {
          res.json(comment);
          // res.json(commentDto.buildDetails(comment));
        });
      }
    })
    .catch(next);
};
*/
