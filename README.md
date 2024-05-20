# SleepTracker

SleepTracker is a web application designed to help users track their sleep patterns and improve their overall sleep quality.

## Setting Up the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/SleepTracker.git
 
2. **Navigate to Project Directory**
    cd SleepTracker

3. **Install Dependencies**
    npm install

4. **Set Up Environment Variables:**
    PORT=3000
    MONGODB_URI=your-mongodb-uri

5. **API Calls and Test Results**
   POST /sleep:
   [
    {
    "userId": 1,
    "hours": 7,
    "timestamp": 1622019930000
    }

    {
    "message": "Sleep record created successfully"
    }

    GET /sleep: 
    [
    {
        "_id": "6649928c872932119c77e84a",
        "userId": 1,
        "hours": 8,
        "timestamp": 1716097675959,
        "recordId": 1716097675078,
        "__v": 0
    },
    {
        "_id": "6649928c872932119c77e850",
        "userId": 1,
        "hours": 7,
        "timestamp": 1716097676341,
        "recordId": 1716097675080,
        "__v": 0
    },
    {
        "_id": "6649928c872932119c77e852",
        "userId": 1,
        "hours": 7,
        "timestamp": 1716097676484,
        "recordId": 1716097675081,
        "__v": 0
    },
    {
        "_id": "664992ea695b0f9656790eb4",
        "userId": 1,
        "hours": 8,
        "timestamp": 1716097770596,
        "recordId": 1716097769749,
        "__v": 0
    },
    {
        "_id": "664992eb695b0f9656790ebc",
        "userId": 4,
        "hours": 6.5,
        "timestamp": 1716097771090,
        "recordId": 1716097769752,
        "__v": 0
    },
    {
        "_id": "6649933af06fd19f10560eed",
        "userId": 4,
        "hours": 6.5,
        "timestamp": 1716097850095,
        "recordId": 1716097849058,
        "__v": 0
    }
   ]

   GET /sleep/:userId:

   [
    {
        "_id": "664992eb695b0f9656790ebc",
        "userId": 4,
        "hours": 6.5,
        "timestamp": 1716097771090,
        "recordId": 1716097769752,
        "__v": 0
    },
    {
        "_id": "6649933af06fd19f10560eed",
        "userId": 4,
        "hours": 6.5,
        "timestamp": 1716097850095,
        "recordId": 1716097849058,
        "__v": 0
    },
    {
        "_id": "6649933af06fd19f10560ef3",
        "userId": 4,
        "hours": 6.5,
        "timestamp": 1716097850460,
        "recordId": 1716097849060,
        "__v": 0
    },
    {
        "_id": "6649933af06fd19f10560ef5",
        "userId": 4,
        "hours": 6.5,
        "timestamp": 1716097850616,
        "recordId": 1716097849061,
        "__v": 0
    }
   ]

    DELETE /sleep/:recordId:

    {
    "message": "Record deleted successfully"
    }

6. **Functions**
    createSleepRecord: Creates a new sleep record.
    getAllSleepRecords: Retrieves all sleep records.
    getSleepRecordsByUserId: Retrieves sleep records for a specific user.
    deleteSleepRecord: Deletes a sleep record by record ID

7. **Testing**
npm test



  