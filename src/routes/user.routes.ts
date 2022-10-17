import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUserController from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import verifyIsAdm from "../middlewares/verifyIsAdm.middlewares";
import verifyTokenMiddeware from "../middlewares/verifyToken.middlewares";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", verifyTokenMiddeware, verifyIsAdm, listUserController);
userRoutes.patch(
  "/:id",
  verifyTokenMiddeware,
  verifyIsAdm,
  updateUserController
);
userRoutes.delete(
  "/:id",
  verifyTokenMiddeware,
  verifyIsAdm,
  deleteUserController
);

export default userRoutes;
