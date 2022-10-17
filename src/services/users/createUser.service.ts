import { IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";

const createUserService = async (user: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = await hash(user.password, 10);

  const newUser = userRepository.create({
    name: user.name,
    email: user.email,
    isAdm: user.isAdm,
    password: hashedPassword,
  });

  await userRepository.save(newUser);

  return newUser;
};
export default createUserService;
