import request from 'supertest';
import { app } from '../../src/app';
import { postCreated, token } from './posts.utils';

const baseUrl = '/api/discuss';

describe('createPost - POST /posts/create', () => {
  it(`Responds 201 and returns the created post.`, async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .set('Authorization', `Bearer ${await token()}`)
      .send(postCreated)
      .expect(201);

    expect(response.body).toEqual(postCreated);
  });

  it('Responds 401 if not logged in.', async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .send();

    expect(response.body.httpCode).toBe(401);
  });

  it(`Responds 400 with message "_id is required." if _id is missing.`, async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .set('Authorization', `Bearer ${await token()}`)
      .send({
        ...postCreated,
        _id: null,
      })
      .expect(400);

    expect(response.body.message).toBe('_id is required.');
  });

  it(`Responds 400 with message "userId is required." if userId is missing.`, async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .set('Authorization', `Bearer ${await token()}`)
      .send({
        ...postCreated,
        userId: null,
      })
      .expect(400);

    expect(response.body.message).toBe('userId is required.');
  });

  it(`Responds 400 with message "message is required." if message is missing.`, async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .set('Authorization', `Bearer ${await token()}`)
      .send({
        ...postCreated,
        userId: null,
      })
      .expect(400);

    expect(response.body.message).toBe('userId is required.');
  });

  it(`Responds 400 with message "userName is required." if userName is missing.`, async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .set('Authorization', `Bearer ${await token()}`)
      .send({
        ...postCreated,
        userName: null,
      })
      .expect(400);

    expect(response.body.message).toBe('userName is required.');
  });

  it(`Responds 400 with message "hidden is required." if hidden is missing.`, async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .set('Authorization', `Bearer ${await token()}`)
      .send({
        ...postCreated,
        hidden: null,
      })
      .expect(400);

    expect(response.body.message).toBe('hidden is required.');
  });

  it(`Responds 400 with message "createdAt is required." if createdAt is missing.`, async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .set('Authorization', `Bearer ${await token()}`)
      .send({
        ...postCreated,
        createdAt: null,
      })
      .expect(400);

    expect(response.body.message).toBe('createdAt is required.');
  });

  it(`Responds 400 with message "updatedAt is required." if updatedAt is missing.`, async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .set('Authorization', `Bearer ${await token()}`)
      .send({
        ...postCreated,
        updatedAt: null,
      })
      .expect(400);

    expect(response.body.message).toBe('updatedAt is required.');
  });

  it(`Responds 400 with message "__v is required." if __v is missing.`, async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .set('Authorization', `Bearer ${await token()}`)
      .send({
        ...postCreated,
        __v: null,
      })
      .expect(400);

    expect(response.body.message).toBe('__v is required.');
  });

  it(`Responds 400 with message "likers is required." if likers is missing.`, async () => {
    const response = await request(app)
      .post(baseUrl + '/posts/create')
      .set('Authorization', `Bearer ${await token()}`)
      .send({
        ...postCreated,
        likers: null,
      })
      .expect(400);

    expect(response.body.message).toBe('likers is required.');
  });
});
