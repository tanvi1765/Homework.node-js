const { categoryService } = require("../services");

/** create category*/
const createcategory= async (req, res) => {
  try {
    const reqBody = req.body;

    const categoryExists = await categoryService(reqBody);
    if (categoryExists) {
      throw new Error(" category already created");
    }

    const user = await categoryService.createcategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "category create successfully!",
      data: { category},
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};