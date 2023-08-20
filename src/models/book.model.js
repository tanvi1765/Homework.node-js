const { boolean } = require("joi");
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    book_name: {
      type: String,
      trim:true,
    },
    author_name: {
      type: Date,
      trim:true,
    },
    book_published: {
      type: boolean,
    },
    is_active: {
      type: Boolean,
      default: true,
  },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const book = mongoose.model("book", bookSchema);

module.exports = book;