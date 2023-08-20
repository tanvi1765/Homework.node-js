const express = require("express");
const categoryRoutes = require("./category.route");
const bookRoutes = require("./book.router");
const router = express.Router();

router.use("/category", categoryRoutes);
router.use("/book", bookRoutes);

module.exports = router;