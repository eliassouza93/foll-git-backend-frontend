import { Router } from "express";
import { UserController } from "../controllers/user-controller";

const router = Router();
const userController = new UserController();

router.get("/", (req, res, next) => userController.index(req, res, next));

export { router };
