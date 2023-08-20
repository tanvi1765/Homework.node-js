/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<category>}
 */
const createcategory = async (reqBody) => {
    return category.create(reqBody);
  };