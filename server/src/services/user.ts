import * as userRepository from '../repositories/user';
import User from '../models/user';

export const getUserByUsername = async (username: string): Promise<User> => {
    return await userRepository.getUserByUsername(username);
};

export const createUser = async (user: User): Promise<User> => {
    return await userRepository.createUser(user);
};

export const existsUserByUsername = async (username: string): Promise<boolean> => {
    return await userRepository.existsUserByUsername(username);
};
