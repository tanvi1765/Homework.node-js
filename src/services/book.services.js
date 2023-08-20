const { book } = require("../models");

/**
 * Get user details by id
 * @param {ObjectId} bookId
 * @returns {Promise<book>}
 */
const getbookById = async (bookId) => {
    return book.findById(bookId);
  };
  /**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getBookList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Category.find(filter).skip(skip).limit(options.limit).select("-password");
};

module.exports = {
  createBook,
  getBookList
};