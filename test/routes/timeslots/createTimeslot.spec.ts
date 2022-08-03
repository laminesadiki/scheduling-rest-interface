import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Create an timeslot', () => {
    it('we create an timeslot without any error', (done) => {
        request(app)
            .post('/api/timeslots/create')
            .send({
                duration: '120 min'
            })
            .expect(200, done);
    });
});
