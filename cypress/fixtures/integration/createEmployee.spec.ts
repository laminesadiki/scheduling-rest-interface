import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Create an employee', () => {
    it('we create an employee without any error', (done) => {
        request(app)
            .post('/api/employees/create')
            .send({
                name: 'sadiki',
                email: 'sadiki@gmail.com',
                password: '123456'
            })
            .expect(200, done);
    });
});
