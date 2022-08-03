import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Get an employee', () => {
    it('we get an employee without any error', (result) => {
        request(app).get('/api/employees/read/1').expect(200, result);
    });
});
