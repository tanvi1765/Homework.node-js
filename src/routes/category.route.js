const express=require("express");
const {userController}=require("../controllers");

const router = express.Router();

/** create validate */
router.post(
    "/create-router",
    validate(categoryValidation.createcategoty),
    categoryController.createcategoty
  );