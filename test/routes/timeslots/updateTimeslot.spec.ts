import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Update an timeslot', () => {
    it('we update an timeslot without any error', (done) => {
        request(app)
            .put('/api/timeslots/update/1')
            .send({
                duration: '500 min'
            })
            .expect(200, done);
    });
});
