const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//GET ALL USERS ||GET
router.get("/all-users", getAllUsers);

// CREATE USERS || POST
router.post("/register", registerController);

//Login || POST
router.post("/login", loginController);

module.exports = router;
