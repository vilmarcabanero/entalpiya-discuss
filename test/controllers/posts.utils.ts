import { app } from '../../src/app';
import request from 'supertest';

const baseUrl = '/api/discuss';

export const postCreated = {
  _id: '3b1df2e0feb64e19ad003e1aa7ddbf12',
  userId: '63261578152a836ab456e929',
  message: '1st post - Vil',
  userName: 'Vilmar Cabañero',
  likers: new Array(),
  hidden: false,
  createdAt: '2022-09-23T16:37:18.479Z',
  updatedAt: '2022-09-23T16:37:18.479Z',
  __v: 0,
};

export async function token() {
  return global.login();
}

export async function createPost() {
  await request(app)
    .post(baseUrl + '/posts/create')
    .set('Authorization', `Bearer ${await token()}`)
    .send(postCreated);
}
