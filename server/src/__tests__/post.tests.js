import {signUp} from '../services/authentication';
import {createPost} from '../services/post';
import errors from '../utils/errors';

// Credentials to create user used in post tests
const user_credentials = {
    username: 'rightusertest',
    nickname: 'Right User Test',
    email: 'rightusertest@gmail.com',
    password: 'RightP@ssw0rdTest'
  }

// Post with attributes that follow all the requirements
const right_post_attributes = {
  id: 'post1234',
  posterUsername: 'rightusertest',
  date: new Date(),
  title: 'post_title',
  content: 'post_content'
}

// Sign up user to be used on tests
await signUp(user_credentials)

// Create post test

describe('Post', () => {
    describe('createPost', () => {
        it('should return an error on inexistent poster', async () => {
  
            const post = {
                id: right_post_attributes.id,
                posterUsername: 'wrongusertest',
                date: right_post_attributes.date,
                title: right_post_attributes.title,
                content: right_post_attributes.content
            }
            try {
                await createPost(post)
            } catch (error) {
                expect(error.message).toBe(errors.USER_NOT_FOUND)
            }
        })
  
        it('should create a new post if all information is valid', async () => {
            const post = right_post_attributes
            const response = await createPost(post)
            expect(response.id).toBe(post.id)
            expect(response.posterUsername).toBe(post.posterUsername)
            expect(response.date).toBe(post.date)
            expect(response.title).toBe(post.title)
            expect(response.content).toBe(post.content)
        })
    })
})
