// import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (
  id: string
): Promise<User | Array<string | number>> => {
  const userRepository = AppDataSource.getRepository(User);

  const profile = await userRepository.findOneBy({ id });

  if (!profile) {
    return ["Invalid id", 404];
  }

  if (!profile.isActive) {
    throw new Error("User is already deleted");
  }

  profile.isActive = false;

  await userRepository.save(profile);

  return profile;
};
export default deleteUserService;
