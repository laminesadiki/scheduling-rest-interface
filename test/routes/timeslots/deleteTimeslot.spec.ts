import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Delete an timeslot', () => {
    it('we Delete an timeslot without any error', (done) => {
        request(app).delete('/api/timeslots/delete/5').expect(200, done);
    });
});
