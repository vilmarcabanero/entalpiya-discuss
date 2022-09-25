import request from 'supertest';
import { app } from '../../src/app';

describe('healthcheck GET /', () => {
  it('responds with Discuss Microservice is ok.', async () => {
    const response = await request(app).get('/api/discuss').send().expect(200);
    expect(response.text).toEqual('Discuss Microservice is ok.');
  });
});
