const router = require("express").Router();
const {singup, login, verifyUserAccount}= require("../controllers/authController");




// /api/auth/register
router.post("/register", singup);

// /api/auth/login
router.post("/login", login);

// /api/auth/:userId/verify/:token
router.get("/:userId/verify/:token", verifyUserAccount);




module.exports = router;