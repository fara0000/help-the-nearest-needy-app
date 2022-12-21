import * as bcrypt from 'bcrypt';

export const encryptPassword = async () => {
  const saltOrRounds = 10;
  const password = 'random_password';
  return await bcrypt.hash(password, saltOrRounds);
};
