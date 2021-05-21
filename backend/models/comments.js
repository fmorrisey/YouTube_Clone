const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, ref: "Comment" },
    user: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
