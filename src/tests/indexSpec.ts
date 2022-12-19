//your tests
import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

it('Checks if the home route is wokring', async () => {
  const response = await request.get('/');
  expect(response.status).toBe(200);
});
