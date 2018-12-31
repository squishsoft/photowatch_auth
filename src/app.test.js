import app from './app';
import request from 'supertest';

describe('Auth route', () => {
    it('should be able to authenticate a valid user', async() => {
        let response = await request(app).get('/authenticate').auth('test', 'pass');
        expect(response.status).toBe(200);
    });

    it('should not authenticate invalid user', async() => {
        let response = await request(app).get('/authenticate').auth('baduser', 'pass');
        expect(response.status).toBe(401);
    });
});