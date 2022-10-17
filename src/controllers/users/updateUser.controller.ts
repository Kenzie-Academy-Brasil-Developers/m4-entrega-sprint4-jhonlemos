import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/users/updateUser.service";
import { User } from "../../entities/user.entity";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const update: IUserUpdate = req.body;
    const id = req.params.id;

    const userUpdated = await updateUserService(update, id);
    if (userUpdated instanceof User) {
      return res.status(200).json(instanceToPlain(userUpdated));
    }

    return res.status(userUpdated[1] as number).json({
      message: userUpdated[0],
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
export default updateUserController;
