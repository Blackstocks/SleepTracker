const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./index');

// Mock the mongoose model and methods
jest.mock('mongoose', () => {
  const originalMongoose = jest.requireActual('mongoose');
  const mockModel = {
    find: jest.fn(),
    findOneAndDelete: jest.fn(),
    save: jest.fn().mockImplementation(function () {
      return Promise.resolve(this);
    }),
  };
  return {
    ...originalMongoose,
    model: jest.fn(() => mockModel),
    connect: jest.fn().mockResolvedValue(),
  };
});

describe('Sleep Record API', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(4000, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe('GET /sleep', () => {
    it('should return all sleep records', async () => {
      const mockRecords = [{ userId: 1, hours: 8, timestamp: 1234567890, recordId: 1 }];
      mongoose.model().find.mockResolvedValue(mockRecords);
      
      const res = await request(app).get('/sleep');

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(mockRecords);
    });

    it('should handle errors', async () => {
      mongoose.model().find.mockRejectedValue(new Error('Error fetching sleep records'));

      const res = await request(app).get('/sleep');

      expect(res.statusCode).toBe(500);
      expect(res.body).toEqual({ message: 'Error fetching sleep records' });
    });
  });

  describe('POST /sleep', () => {
    it('should create a new sleep record', async () => {
      const sleepRecord = { userId: 1, hours: 7, timestamp: 1234567890 };
      mongoose.model().save.mockResolvedValueOnce({ ...sleepRecord, recordId: Date.now() });

      const res = await request(app).post('/sleep').send(sleepRecord);

      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual({ message: 'Sleep record created successfully' });
    });

    it('should handle errors', async () => {
      mongoose.model().save.mockRejectedValue(new Error('Error creating sleep record'));
      const sleepRecord = { userId: 1, hours: 7, timestamp: 1234567890 };

      const res = await request(app).post('/sleep').send(sleepRecord);

      expect(res.statusCode).toBe(500);
      expect(res.body).toEqual({ message: 'Error creating sleep record' });
    });
  });

  describe('GET /sleep/:userId', () => {
    it('should return sleep records for a user', async () => {
      const userRecords = [
        { userId: 1, hours: 7, timestamp: 1234567890, recordId: 1 },
        { userId: 1, hours: 6, timestamp: 1234567891, recordId: 2 }
      ];
      mongoose.model().find.mockResolvedValue(userRecords);

      const res = await request(app).get('/sleep/1');

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(userRecords);
    });

    it('should handle no records found for a user', async () => {
      mongoose.model().find.mockResolvedValue([]);

      const res = await request(app).get('/sleep/1');

      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({ message: 'No records found for this user' });
    });

    it('should handle errors', async () => {
      mongoose.model().find.mockRejectedValue(new Error('Error fetching sleep records'));

      const res = await request(app).get('/sleep/1');

      expect(res.statusCode).toBe(500);
      expect(res.body).toEqual({ message: 'Error fetching sleep records' });
    });
  });

  describe('DELETE /sleep/:recordId', () => {
    it('should delete a sleep record', async () => {
      mongoose.model().findOneAndDelete.mockResolvedValue({ userId: 1, hours: 7, timestamp: 1234567890, recordId: 1 });

      const res = await request(app).delete('/sleep/1');

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ message: 'Record deleted successfully' });
    });

    it('should handle record not found', async () => {
      mongoose.model().findOneAndDelete.mockResolvedValue(null);

      const res = await request(app).delete('/sleep/1');

      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({ message: 'Record not found' });
    });

    it('should handle errors', async () => {
      mongoose.model().findOneAndDelete.mockRejectedValue(new Error('Error deleting sleep record'));

      const res = await request(app).delete('/sleep/1');

      expect(res.statusCode).toBe(500);
      expect(res.body).toEqual({ message: 'Error deleting sleep record' });
    });
  });
});
