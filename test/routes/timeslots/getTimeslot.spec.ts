import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Get an timeslot', () => {
    it('we get an timeslot without any error', (result) => {
        request(app).get('/api/timeslots/read/1').expect(200, result);
    });
});
