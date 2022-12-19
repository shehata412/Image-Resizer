//import images from '../routes/api/images';
import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test Images Endpoint', () => {
  it('Check the api endpoint is working and returns 200', async () => {
    const response = await request.get('/api/images?filename=panda&height=300&width=300');
    expect(response.status).toBe(200);
  });
  it('Check the api endpoint is not working and missing all params', async () => {
    const response = await request.get('/api/images?');
    expect(response.status).toBe(400);
    expect(response.text).toBe('Bad request please enter the correct parameters');
  });
  it('Check the api endpoint is not working and missing the filename', async () => {
    const response = await request.get('/api/images?height=300&width=300');
    expect(response.status).toBe(400);
    expect(response.text).toBe('Please send the filename');
  });
  it('Check the api endpoint is not working and missing the height', async () => {
    const response = await request.get('/api/images?filename=panda&width=300');
    expect(response.status).toBe(400);
    expect(response.text).toBe('Please send the height');
  });
  it('Check the api endpoint is not working and missing the width', async () => {
    const response = await request.get('/api/images?filename=panda&height=300');
    expect(response.status).toBe(400);
    expect(response.text).toBe('Please send the width');
  });
});
