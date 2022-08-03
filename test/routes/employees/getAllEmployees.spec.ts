import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Get all employees', () => {
    it('we get all employees without any error', (result) => {
        request(app).get('/api/employees/read').expect(200, result);
    });
});
