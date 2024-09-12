const express = require("express");
const {
  Login,
  Register,
  ShowProfile,
  UpdateProfile,
  authMiddleware,
} = require("../Controllers/UserController");
const router = express.Router();
router.post("/login", Login);
router.post("/register", Register);
router.get("/profile", authMiddleware, ShowProfile);
router.put("/profile", authMiddleware, UpdateProfile);
module.exports = router;
