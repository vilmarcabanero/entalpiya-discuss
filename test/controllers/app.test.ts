import request from 'supertest';
import { app } from '../../src/app';

describe('app', () => {
  it('responds 404 for endpoints not existing.', async () => {
    await request(app).get('/api/discuss/foobar').send().expect(404);
  });
});
