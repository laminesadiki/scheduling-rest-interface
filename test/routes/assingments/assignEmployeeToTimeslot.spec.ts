import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Assign an employee to a timeslot', () => {
    it('We assign an employee to a timeslot without any error', (done) => {
        request(app)
            .post('/api/assignments/assign')
            .send({
                employeeId: 1,
                timeslotId: 1
            })
            .expect(200, done);
    });
});
