import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const userDeleted = await deleteUserService(id);

    if (userDeleted instanceof User) {
      return res.status(204).json(userDeleted);
    }
    return res.status(userDeleted[1] as number).json({
      message: userDeleted[0],
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
};
export default deleteUserController;
