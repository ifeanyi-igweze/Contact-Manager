# Contact-Manager Web API

## Table of Contents
* Description
* Purpose
* Lessons
* Installation & Setup
* Live API link
* Project Usage

## Project Description
This project is a Contact-Manager Web API that allows users to register and login in order to create, update, and delete their phone contacts. It is built using MongoDB as the database.

## Purpose
- To solidify my understanding of CRUD functionality 

- To become more acquainted with User Authentication

## What I learned from this project:
- The proper approach to structure my project, which is the MVC structure for most backend projects

- Novel methods or approaches to querying the database when performing CRUD operations.

- I learned about the bcrypt package and some fundamental password hashing algorithms.

- The significance of the jsonwebtoken in communicating information to the client.

## How to Install & Run the Project
1. Clone the repository:
   - run in your terminal
   ```
     git clone https://github.com/RICHYDOS/Contact-Manager
   ```
3. Change into the repository root directory
   ```
     cd Contact-Manager
   ```
5. Install Dependencies
   ```
      npm install
   ```
7. Set up MongoDB or MongoDB Atlas:
  - This project is geared toward connecting to MongoDB Atlas
  - Set up the `.env` file in the root directory as seen in the `.env.example` file
  - Adjust the MongoDB connection URI in the project's `.env` file if necessary.
  - You can install MongoDB and run it on your local machine although you will have to make the necessary changes in the           `index.js` file
5. Start the server:
  ```
      npm run start
  ```
  - You should see in the terminal:
    ```
      > contact-manager@1.0.0 start
      > node index.js
      Server running on Port < PortNumber >
      Connected to < DatabaseName >
    ```

## Test or Integrate The API
- API is live at https://cm-mongo.onrender.com

## How to Use the Project

### USERS
#### Register a new user (that's you 😁):
- Send a `POST` request to `/api/users/register` as in `https://cm-mongo.onrender.com/api/users/register` with the following JSON body:
```
 {
   "username": "your-username",
   "email": "your-email",
   "password": "your-password"
 }
 ```
 - The response will include your user details

#### Login:
- Send a `POST` request to `/api/users/login` with the following JSON body:
 ```
 {
   "email": "your-email",
   "password": "your-password"
 }
 ```
 - The response will include an authentication token that needs to be included in subsequent requests(the request or HTTP headers).

#### View User:
  You must have logged in before...
- Under HTTP Headers:
  - Add: {"auth-token": yourAuthenticationToken}
- Send a `GET` request to `/api/users/user`
 - The response will include your user details

### CONTACTS
- All requests must have the authentication token included in the HTTP headers under the key 'auth-token'
#### Create a new contact:
- Send a `POST` request to `/api/contacts` with the following JSON body:
 ```json
 {
   "name": "John Doe",
   "phone": "1234567890",
   "email": "ohndoe@example.com"
```
 - The response will include the contact's details

#### Update a contact:
- Send a `PUT` request to `/api/contacts/:id` with the contact's ID in the URL path and provide the updated contact details in the JSON body.

#### Delete a contact:
- Send a `DELETE` request to `/api/contacts/:id` with the contact's ID in the URL path.

#### View a contact:
- Send a `GET` request to `/api/contacts/:id` with the contact's ID in the URL path.

#### View all contacts:
- Send a `GET` request to `/api/contacts/` with the contact's ID in the URL path.
