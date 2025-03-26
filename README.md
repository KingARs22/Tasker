
Live client URL - "https://tasker-liard-phi.vercel.app/"
Live server URL - "https://tasker-1-7keh.onrender.com/"



FOR CLIENT SETUP 
run commands,
  cd client 
  npm start
IF running on local machine, client will start on  "http://localhost:3000"
  ** ensure all the required dependencies are installed
FOR SERVER SETUP
In .env file put your own MONGODB_URI
  for.e.g. - MONGODB_URI = "YOUR_MONGODB_URI"
run commands,
  cd server
  npm start
If running on local machine, client will start on "http://localhost:5000"
  ** ensure all the required dependencies are installed (express mongoose cors dotenv)
  ** if dependencies are not installed run command,
        npm i express mongoose cors dotenv 


All the API endpoints are : 
1. Get All Tasks
   Endpoint - GET /tasks
   RESPONSE - for e.g.
   [
      {
        "_id": "60d5f60f9ebf8b001c8e4b32",
        "title": "Task 1",
        "description": "Description of Task 1",
        "status": "pending"
      }
    ]
2. Get a single task
   Endpoint - GET /tasks/:id
   RESPONSE - for e.g {
                        "_id": "60d5f60f9ebf8b001c8e4b32",
                        "title": "Task 1",
                        "description": "Description of Task 1",
                        "status": "pending"
                      }
3. Create New Task
   Endpoint - POST /tasks
   REQUEST - for e.g.
             {
                "title": "New Task",
                "description": "Task details",
                "status": "pending"
             }
    RESPONSE - for e.g.
             {
                "_id": "60d5f60f9ebf8b001c8e4b33",
                "title": "New Task",
                "description": "Task details",
                "status": "pending"
              }
4. Update a task
   Endpoint - PUT /tasks/:id
   REQUEST - for e.g.
             {
                "title": "Updated Task Title",
                "status": "completed"
              }
   RESPONSE - for e.g.
             {
                "_id": "60d5f60f9ebf8b001c8e4b32",
                "title": "Updated Task Title",
                "description": "Description of Task 1",
                "status": "completed"
              }
5. Delete a task
   Endpoint - DELETE /tasks/:id
   RESPONSE - for e.g.
             {
                "message": "Task deleted"
              }


Testing with POSTMAN 
1. Create new request
2. Set request type (GET,POST,PUT,DELETE)
3. For POST and PUT requests, go to the Body tab and select raw, then use JSON Format.
4. Set Content-type as application/json in the Headers
5. Click Send to execute the request and view responses



Below attached are the Screenshots of the Website and also a demo of the website. It is also uploaded on the repo.


![image1](https://github.com/user-attachments/assets/b56190a1-1172-46a3-9b79-25361eace5cc)

![image2](https://github.com/user-attachments/assets/c1b10b99-fc6c-4175-abeb-fa1dbdee679d)

![image3](https://github.com/user-attachments/assets/68e863e3-201e-44fc-8534-2894bc211062)

![image4](https://github.com/user-attachments/assets/b376d13d-3a9e-4bc9-a8ad-608abb211cb1)

![image5](https://github.com/user-attachments/assets/70a8bd5e-a220-4b68-b2a2-12e839b4801a)




https://github.com/user-attachments/assets/53b507f5-78db-4e97-8186-cada407e632c



