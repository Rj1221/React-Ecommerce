import express from "express";
import { register } from "../controllers/user.js";
const router = express.Router();

// @route   POST /api/v1/user/register
// @desc    Register User
// @access  Public
router.post("/register", register);

export default router;
