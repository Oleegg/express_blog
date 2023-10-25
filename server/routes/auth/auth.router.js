const Router = require("express");
const router = new Router();
const authController = require("../../controller/auth.controller");
const { body } = require("express-validator");
const validate = require("./auth.config");

router.post(
  "/auth/register",
  validate([
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Minimum password length 6 characters"),
  ]),
  authController.registrationUser
);

router.post(
  "/auth/login",
  validate([
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Minimum password length 6 characters"),
  ]),
  authController.getUser
);
// router.get("/auth", postController.getPostsByPerson);

module.exports = router;
