import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Update an employee', () => {
    it('we update an employee without any error', (done) => {
        request(app)
            .put('/api/employees/update/6')
            .send({
                name: 'laminesadiki',
                email: 'laminesadiki@gmail.com',
                password: '123456'
            })
            .expect(200, done);
    });
});
