import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import "dotenv/config";

const listUserService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const allUsers = await userRepository.find();

  return allUsers;
};
export default listUserService;
