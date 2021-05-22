const Comment = require("../models/comments.model");

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
