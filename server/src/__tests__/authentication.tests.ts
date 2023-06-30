import { signUp, signIn } from '../services/authentication';
import errors from '../errors';

// Mock the user.ts module
jest.mock('../repositories/user');

// User with credentials that follow all the requirements
const rightUserCredentials = {
    username: 'rightusertest',
    nickname: 'Right User Test',
    email: 'rightusertest@gmail.com',
    password: 'RightP@ssw0rdTest'
}

describe('Sign Up', () => {
    describe('Field Validations', () => {
        it('should return an error if the username is invalid', async () => {
            const invalidUsernames = ['João', '123abc', 'instituto.computacao', '456']

            for (const invalidUsername of invalidUsernames) {
                const user = {
                    username: invalidUsername,
                    nickname: rightUserCredentials.nickname,
                    email: rightUserCredentials.email,
                    password: rightUserCredentials.password
                }
                try {
                    await signUp(user)
                } catch (error) {
                    expect(error).toBeInstanceOf(errors.InvalidParameterError);
                    if (error instanceof errors.InvalidParameterError) {
                        expect(error.message).toBe( `Field 'username' got invalid value '${invalidUsername}'`);
                    }
                }
            }
        });

        it('should return an error if the nickname is invalid', async () => {
            const invalidNicknames = ['User Test1', 'User Test 2', '123', 'User#Test']

            for (const invalidNickname of invalidNicknames) {
                const user = {
                    username: rightUserCredentials.username,
                    nickname: invalidNickname,
                    email: rightUserCredentials.email,
                    password: rightUserCredentials.password
                }
                try {
                    await signUp(user)
                } catch (error) {
                    expect(error).toBeInstanceOf(errors.InvalidParameterError);
                    if (error instanceof errors.InvalidParameterError) {
                        expect(error.message).toBe( `Field 'nickname' got invalid value '${invalidNickname}'`);
                    }
                }   
            }
        });

        it('should return an error if the email is invalid', async () => {
            const invalidEmails = ['Email', '@teste.com', '123@', 'User#Test', 'instituto.computacao.com@']

            for (const invalidEmail of invalidEmails) {
                const user = {
                    username: rightUserCredentials.username,
                    nickname: rightUserCredentials.nickname,
                    email: invalidEmail,
                    password: rightUserCredentials.password
                }
                try {
                    await signUp(user)
                } catch (error) {
                    expect(error).toBeInstanceOf(errors.InvalidParameterError);
                    if (error instanceof errors.InvalidParameterError) {
                        expect(error.message).toBe( `Field 'email' got invalid value '${invalidEmail}'`);
                    }
                }
            }
        });

        it('should return an error if the password is invalid', async () => {
            const invalidPasswords = ['12345', 'abcde', 'ABCD', '!@#$&', 'Abc12']

            for (const invalidPassword of invalidPasswords) {
                const user = {
                    username: rightUserCredentials.username,
                    nickname: rightUserCredentials.nickname,
                    email: rightUserCredentials.email,
                    password: invalidPassword
                }
                try {
                    await signUp(user)
                } catch (error) {
                    expect(error).toBeInstanceOf(errors.InvalidParameterError);
                    if (error instanceof errors.InvalidParameterError) {
                        expect(error.message).toBe( `Field 'password' got invalid value '${invalidPassword}'`);
                    }
                }
            }
        });

        it('should create a new user if all information is valid', async () => {
            const user = rightUserCredentials
            const response = await signUp(user)
            expect(response.username).toBe(user.username)
            expect(response.nickname).toBe(user.nickname)
            expect(response.email).toBe(user.email)
            expect(response.role).toBeDefined()
            expect(response.password).toBeUndefined()
            expect(response.salt).toBeUndefined()
        })


        it('should return an error if the user already exists', async () => {
            const user = rightUserCredentials
            await signUp(user)
            try {
                await signUp(user)
            } catch (error) {
                expect(error).toBeInstanceOf(errors.UsernameIsTaken);
                if (error instanceof errors.UsernameIsTaken) {
                    expect(error.message).toBe( `Username '${user.username}' is taken`);
                }
            }   
        })
})

  // Sign-in tests

   describe('signIn', () => {
       it('should return an error if the user is not found', async () => {
           const credentials = {
               username: 'nonexistentuser',
               password: 'P@ssw0rdNonExistent'
           }
           try {
               await signIn(credentials.username, credentials.username)
           } catch (error) {
                expect(error).toBeInstanceOf(errors.InvalidCredentials);
                if (error instanceof errors.InvalidCredentials) {
                    expect(error.message).toBe( `Invalid username or password`);
                }
            }   
       })

       it('should return an error if the password is incorrect', async () => {
           const credentials = {
               username: rightUserCredentials.username,
               password: 'WRONG' + rightUserCredentials.password
           }
           try {
               await signIn(credentials.username, credentials.password)
           } catch (error) {
                expect(error).toBeInstanceOf(errors.InvalidCredentials);
                if (error instanceof errors.InvalidCredentials) {
                    expect(error.message).toBe( `Invalid username or password`);
                }
            }   
       })

       it('should sign in the user if credentials are correct', async () => {
            const user = rightUserCredentials
            const response = await signUp(user)
            expect(response.username).toBe(user.username)
            expect(response.nickname).toBe(user.nickname)
            expect(response.email).toBe(user.email)
            expect(response.role).toBeDefined()
            expect(response.password).toBeUndefined()
            expect(response.salt).toBeUndefined()
       })
   })
})