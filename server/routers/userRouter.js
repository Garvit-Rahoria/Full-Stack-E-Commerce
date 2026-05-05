const userRouter = require("express").Router()
const { register, verifyEmail, resetOtp, login, getMe,logout,address } = require("../controllers/userController")
const { protect } = require("../middleware/auth")

userRouter.post("/register", register)
userRouter.post("/verify-otp", verifyEmail)
userRouter.post("/reset-otp", resetOtp)
userRouter.post("/login", login)
userRouter.get("/get",protect, getMe)
userRouter.get("/logout", logout)
userRouter.get("/address", address)

module.exports = userRouter;