import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/app';

describe('server checks', () => {
    it('server created withour error', (result) => {
        request(app).get('/api/employees/read').expect(200, result);
    });
});
