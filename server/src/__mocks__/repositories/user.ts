import { ResourceNotFound }  from '../../errors/validation';

export const existsUserByUsername = async (username: string) => {
  // Simulate the behavior of the existsUserByUsername function in a test environment
  // For testing purposes, return true if the username is 'existingUser'
  // Return false for any other username
  return username === 'existingUser';
};

export const getUserByUsername = async (username: string) => {
  // Simulate the behavior of the getUserByUsername function in a test environment
  // For testing purposes, return a mock User object if the username is 'existingUser'
  // Throw a ResourceNotFound error for any other username
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
