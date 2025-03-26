
Tasker - Task Management Application

Live URLs:
- Client: https://tasker-liard-phi.vercel.app/
- Server: https://tasker-1-7keh.onrender.com/

--------------------------------
Setup Instructions

Client Setup:
1. Navigate to the client directory:
   cd client
2. Start the client:
   npm start
3. If running locally, the client will be available at:
   http://localhost:3000

Note: Ensure all required dependencies are installed.

Server Setup:
1. Configure the .env file with your MongoDB connection string:
   MONGODB_URI="YOUR_MONGODB_URI"
2. Navigate to the server directory:
   cd server
3. Start the server:
   npm start
4. If running locally, the server will be available at:
   http://localhost:5000

Note: Ensure dependencies (express, mongoose, cors, dotenv) are installed.
If not, install them using:
   npm i express mongoose cors dotenv

--------------------------------
API Endpoints

1. Get All Tasks
   - Endpoint: GET /tasks
   - Response Example:
     [
       {
         "_id": "60d5f60f9ebf8b001c8e4b32",
         "title": "Task 1",
         "description": "Description of Task 1",
         "status": "pending"
       }
     ]

2. Get a Single Task
   - Endpoint: GET /tasks/:id
   - Response Example:
     {
       "_id": "60d5f60f9ebf8b001c8e4b32",
       "title": "Task 1",
       "description": "Description of Task 1",
       "status": "pending"
     }

3. Create a New Task
   - Endpoint: POST /tasks
   - Request Example:
     {
       "title": "New Task",
       "description": "Task details",
       "status": "pending"
     }
   - Response Example:
     {
       "_id": "60d5f60f9ebf8b001c8e4b33",
       "title": "New Task",
       "description": "Task details",
       "status": "pending"
     }

4. Update a Task
   - Endpoint: PUT /tasks/:id
   - Request Example:
     {
       "title": "Updated Task Title",
       "status": "completed"
     }
   - Response Example:
     {
       "_id": "60d5f60f9ebf8b001c8e4b32",
       "title": "Updated Task Title",
       "description": "Description of Task 1",
       "status": "completed"
     }

5. Delete a Task
   - Endpoint: DELETE /tasks/:id
   - Response Example:
     {
       "message": "Task deleted"
     }

--------------------------------
Testing with Postman

1. Open Postman and create a new request.
2. Select the request type (GET, POST, PUT, DELETE).
3. For POST and PUT requests:
   - Go to the Body tab.
   - Select raw.
   - Use JSON format.
4. Set Content-Type as application/json in the Headers.
5. Click Send to execute the request and view the response.

--------------------------------





Below attached are the Screenshots of the Website and also a demo of the website. It is also uploaded on the repo.


![image1](https://github.com/user-attachments/assets/b56190a1-1172-46a3-9b79-25361eace5cc)

![image2](https://github.com/user-attachments/assets/c1b10b99-fc6c-4175-abeb-fa1dbdee679d)

![image3](https://github.com/user-attachments/assets/68e863e3-201e-44fc-8534-2894bc211062)

![image4](https://github.com/user-attachments/assets/b376d13d-3a9e-4bc9-a8ad-608abb211cb1)

![image5](https://github.com/user-attachments/assets/70a8bd5e-a220-4b68-b2a2-12e839b4801a)




https://github.com/user-attachments/assets/53b507f5-78db-4e97-8186-cada407e632c



