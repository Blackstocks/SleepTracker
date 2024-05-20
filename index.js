require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

app.use(bodyParser.json()); // Parsed JSON data in requests

// Defining the SleepRecord schema
const sleepRecordSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  hours: { type: Number, required: true },
  timestamp: { type: Number, required: true },
  recordId: { type: Number, required: true, unique: true } 
});

// Creating the SleepRecord model
const SleepRecord = mongoose.model('SleepRecord', sleepRecordSchema);

// Connecting to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    // Starting the server after successful connection
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));


app.get('/sleep', async (req, res) => {
  try {
    const allRecords = await SleepRecord.find();
    res.json(allRecords);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching sleep records' });
  }
});

// POST /sleep endpoint to store sleep data
let recordIdCounter = Date.now(); // Initialize a counter

app.post('/sleep', async (req, res) => {
  const { userId, hours, timestamp } = req.body;
  console.log('Received sleep record data:', req.body);

  try {
    // Generating a unique numeric record ID
    const uniqueId = recordIdCounter++;
    const newRecord = new SleepRecord({ userId, hours, timestamp, recordId: uniqueId });
    await newRecord.save();
    res.status(201).json({ message: 'Sleep record created successfully' });
  } catch (err) {
    console.error(err); // Loging the error details for debugging
    res.status(500).json({ message: 'Error creating sleep record' });
  }
});



// GET /sleep/:userId endpoint to retrieve user sleep data
app.get('/sleep/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const userRecords = await SleepRecord.find({ userId });
    if (!userRecords.length) {
      return res.status(404).json({ message: 'No records found for this user' });
    }
    userRecords.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)); // Sorting by timestamps
    res.json(userRecords);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching sleep records' });
  }
});

// DELETE /sleep/:recordId endpoint to delete a record
app.delete('/sleep/:recordId', async (req, res) => {
  const recordId = req.params.recordId;

  try {
    const deletedRecord = await SleepRecord.findOneAndDelete({ recordId: recordId });
    if (!deletedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    console.error(err); // Log the error details for debugging
    res.status(500).json({ message: 'Error deleting sleep record' });
  }
});



// Used to catch any unhandled errors in your application
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;