import {Router} from 'express';
import * as auth from "../controllers/auth.js"
const router = Router()
router.post("/login",auth.signIn)
router.post("/signup",auth.signUp)
router.post("/sigup/google",auth.signUpWithGoogle)
router.post("/sigin/google",auth.signInWithGoogle)

const authRoutes = router
export default authRoutes