import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Delete an employee', () => {
    it('we Delete an employee without any error', (done) => {
        request(app).delete('/api/employees/delete/9').expect(200, done);
    });
});
