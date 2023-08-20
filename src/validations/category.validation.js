const Joi=require("joi");

/** create category */
const createcategoty = {
    body: Joi.object().keys({
      category_name: Joi.string().required().trim(),
      category_desc: Joi.string().required().trim(),
    }),
  };