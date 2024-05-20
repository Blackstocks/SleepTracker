## Sleep Tracker API

This well-structured and secure API allows you to track your sleep patterns effectively.

**Features:**

* Create new sleep records (POST /sleep)
* Retrieve all sleep records (GET /sleep)
* Retrieve sleep records for a specific user (GET /sleep/:userId) **(Implement if functionality is intended)**
* Delete a sleep record (DELETE /sleep/:recordId) **(Implement if functionality is intended)**

The API is built using Node.js, Express, and Mongoose, ensuring efficient data management and scalability.

**Installation**

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

### POST /sleep:

Request:
```json
{
  "userId": 1,
  "hours": 7,
  "timestamp": 1622019930000
}
```

Response:
```json
{
    "message": "Sleep record created successfully"
}
```

### GET /sleep:

Response:
```json
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
```
### GET /sleep/:userId:
```json
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
```
    
### DELETE /sleep/:recordId:
```json
    {
    "message": "Record deleted successfully"
    }
```



5. **Testing**
    ```bash
    npm test