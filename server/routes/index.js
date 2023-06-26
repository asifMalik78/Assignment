import { Router } from "express";
import {
  registerUser,
  loginUser,
  createPortal,
  getPortal,
  updatePortal,
  deletePortal,
} from "../controller/index.js";

import { verifyTokenMiddleware } from "../service/verifyTokenMiddleware.js";

const router = Router();

//user register route
router.route("/users").post(registerUser);

//user login route
router.route("/login").post(loginUser);

//create portal
router.route("/portal/create").post(verifyTokenMiddleware, createPortal);

//get portal
router.route("/portal").get(verifyTokenMiddleware, getPortal);

//update portal
router.route("/portal/:id").put(verifyTokenMiddleware, updatePortal);

//delete portal
router.route("/portal/:id").delete(verifyTokenMiddleware, deletePortal);

export default router;
