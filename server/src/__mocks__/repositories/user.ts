import { ResourceNotFound }  from '../../errors/validation';

export const existsUserByUsername = async (username: string) => {
  return username === 'existingUser';
};

export const getUserByUsername = async (username: string) => {
  if (username === 'existingUser') {
    return {
      username: 'existingUser',
      nickname: 'Existing User',
      email: 'existing_user@example.com',
      role: 'user',
      salt: 'salt',
      password: 'hashedpassword',
    };
  } else {
    throw new ResourceNotFound('User');
  }
};
