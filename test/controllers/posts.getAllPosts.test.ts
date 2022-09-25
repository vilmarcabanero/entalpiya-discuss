import request from 'supertest';
import { app } from '../../src/app';
import { createPost, postCreated } from './posts.utils';

const baseUrl = '/api/discuss';

describe('getAllPosts GET /posts/all', () => {
  it('Returns an empty array if there are no posts.', async () => {
    const response = await request(app)
      .get(baseUrl + '/posts/all')
      .send()
      .expect(200);

    expect(response.body.length).toBe(0);
  });

  it('Returns an array with a single post in it equal to the created post.', async () => {
    await createPost();

    const response = await request(app)
      .get(baseUrl + '/posts/all')
      .send()
      .expect(200);

    expect(JSON.stringify(response.body[0])).toBe(JSON.stringify(postCreated));
  });
});
