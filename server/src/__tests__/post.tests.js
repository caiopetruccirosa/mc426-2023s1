import {createPost} from '../services/post';
import errors from '../utils/errors';


// Post with attributes that follow all the requirements
const right_post_attributes = {
  id: 'post1234',
  posterUsername: 'rightusertest',
  date: new Date(),
  title: 'post_title',
  content: 'post_content'
}


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
    })
})
