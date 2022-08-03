import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Get all timeslots', () => {
    it('we get all timeslots without any error', (result) => {
        request(app).get('/api/timeslots/read').expect(200, result);
    });
});
