import {signUp, signIn} from '../services/authentication';
import errors from '../utils/errors';

// User with credentials that follow all the requirements
const right_user_credentials = {
  username: 'rightusertest',
  nickname: 'Right User Test',
  email: 'rightusertest@gmail.com',
  password: 'RightP@ssw0rdTest'
}

// Sign-up tests

describe('Authentication', () => {
  describe('signUp', () => {
    
      it('should return an error if the username is invalid', async () => {

          const invalidUsernames = ['João', '123abc', 'instituto.computacao', '456']

          for (const invalidUsername of invalidUsernames) {
              const user = {
                  username: invalidUsername,
                  nickname: right_user_credentials.nickname,
                  email: right_user_credentials.email,
                  password: right_user_credentials.password
              }
              try {
                  await signUp(user)
              } catch (error) {
                  expect(error.message).toBe(errors.INVALID_USERNAME)
              }
          }
      })

      it('should return an error if the nickname is invalid', async () => {

          const invalidNicknames = ['User Test1', 'User Test 2', '123', 'User#Test']

          for (const invalidNickname of invalidNicknames) {
              const user = {
                  username: right_user_credentials.username,
                  nickname: invalidNickname,
                  email: right_user_credentials.email,
                  password: right_user_credentials.password
              }
              try {
                  await signUp(user)
              } catch (error) {
                  expect(error.message).toBe(errors.INVALID_NICKNAME)
              }
          }
      })

      it('should return an error if the email is invalid', async () => {

          const invalidEmails = ['Email', '@teste.com', '123@', 'User#Test', 'instituto.computacao.com@']

          for (const invalidEmail of invalidEmails) {
              const user = {
                  username: right_user_credentials.username,
                  nickname: right_user_credentials.nickname,
                  email: invalidEmail,
                  password: right_user_credentials.password
              }
              try {
                  await signUp(user)
              } catch (error) {
                  expect(error.message).toBe(errors.INVALID_EMAIL)
              }
          }
      })

      it('should return an error if the password is invalid', async () => {
          const invalidPasswords = ['12345', 'abcde', 'ABCD', '!@#$&', 'Abc12']

          for (const invalidPassword of invalidPasswords) {
              const user = {
                  username: right_user_credentials.username,
                  nickname: right_user_credentials.nickname,
                  email: right_user_credentials.email,
                  password: invalidPassword
              }
              try {
                  await signUp(user)
              } catch (error) {
                  expect(error.message).toBe(errors.INVALID_PASSWORD)
              }
          }
      })

//       it('should create a new user if all information is valid', async () => {
//           const user = right_user_credentials
//           const response = await signUp(user)
//           expect(response.username).toBe(user.username)
//           expect(response.nickname).toBe(user.nickname)
//           expect(response.email).toBe(user.email)
//           expect(response.role).toBeDefined()
//           expect(response.password).toBeUndefined()
//           expect(response.salt).toBeUndefined()
//       })


//   it('should return an error if the user already exists', async () => {
//       const user = right_user_credentials
//       await signUp(user)
//       try {
//           await signUp(user)
//       } catch (error) {
//           expect(error.message).toBe(errors.USER_ALREADY_EXISTS)
//       }
//   })
// })

  // Sign-in tests

//   describe('signIn', () => {
//       it('should return an error if the user is not found', async () => {
//           const credentials = {
//               username: 'nonexistentuser',
//               password: 'P@ssw0rdNonExistent'
//           }
//           try {
//               await signIn(credentials.username, credentials.username)
//           } catch (error) {
//               expect(error.message).toBe(errors.USER_NOT_FOUND)
//           }
//       })

//       it('should return an error if the password is incorrect', async () => {
//           const credentials = {
//               username: right_user_credentials.username,
//               password: 'WRONG' + right_user_credentials.password
//           }
//           try {
//               await signIn(credentials.username, credentials.password)
//           } catch (error) {
//               expect(error.message).toBe(errors.INCORRECT_USERNAME_OR_PWD)
//           }
//       })

//       it('should sign in the user if credentials are correct', async () => {
//           const user = right_user_credentials
//           const response = await signIn(user.username, user.password)
//           expect(response.username).toBe(user.username)
//           expect(response.nickname).toBe(user.nickname)
//           expect(response.email).toBe(user.email)
//           expect(response.role).toBeDefined()
//           expect(response.password).toBeUndefined()
//           expect(response.salt).toBeUndefined()
//       })
//   })
// })