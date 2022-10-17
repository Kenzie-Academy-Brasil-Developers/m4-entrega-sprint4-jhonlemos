import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listUserService from "../../services/users/listUsers.service";

const listUserController = async (req: Request, res: Response) => {
  try {
    const allUsers = await listUserService();
    return res.status(200).json(instanceToPlain(allUsers));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
export default listUserController;
