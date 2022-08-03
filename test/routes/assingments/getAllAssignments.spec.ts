import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Get all assignments', () => {
    it('we get all assignments without any error', (result) => {
        request(app).get('/api/assignments/read').expect(200, result);
    });
});
