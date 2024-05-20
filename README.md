# SleepTracker

SleepTracker is a web application designed to help users track their sleep patterns and improve their overall sleep quality.

## Setting Up the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/SleepTracker.git
 
2. **Navigate to Project Directory**
    ```bash
    cd SleepTracker

3. **Install Dependencies**
    ```bash
    npm install

4. **Set Up Environment Variables:**
    ```bash
    PORT=3000
    MONGODB_URI=your-mongodb-uri


### API Calls and Test Results

### POST /sleep

Request:
```json
{
  "userId": 1,
  "hours": 7,
  "timestamp": 1622019930000
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

6. **Functions** <br>
    createSleepRecord: Creates a new sleep record.<br>
    getAllSleepRecords: Retrieves all sleep records.<br>
    getSleepRecordsByUserId: Retrieves sleep records for a specific user.<br>
    deleteSleepRecord: Deletes a sleep record by record ID<br>

7. **Testing**
    ```bash
    npm test



  