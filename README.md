
# Paytm App

## Description

This is a Paytm-like application that allows users to authenticate, transfer money to other users, and apply transaction concepts in a relational database management system (RDBMS) for handling money transfers. The app ensures data integrity by rolling back transactions if they fail, preventing any money from being lost or transferred incorrectly.

### Features:
- **User Authentication**: Users can register, log in, and authenticate using JWT (JSON Web Token).
- **Money Transfer**: Users can transfer money to another user. Transactions are handled with rollback mechanisms in case of failure, ensuring safety and consistency.
- **Transaction Handling**: If a transaction fails, it is aborted and the changes are rolled back to maintain the original state.
- **Frontend**: Built with **React** and styled using **Tailwind CSS**.
- **Backend**: Built using **Node.js**, **Express**, and **MongoDB** as the database.

### Libraries Used:
- **JWT**: For user authentication and authorization.
- **Zod**: For input validation and schema validation.
- **React-Router-Dom**: For routing and navigation within the frontend.

## Tech Stack

- **Frontend**:
  - React
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express
  - MongoDB
- **Libraries**:
  - JWT (for user authentication)
  - Zod (for input validation)
  - React-Router-Dom (for frontend routing)

## Installation and Running Guide

Follow these steps to install and run the Paytm App locally.

### Prerequisites

Before getting started, ensure you have the following software installed:

- **Node.js** (version 14 or higher) – [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) – npm comes bundled with Node.js.
- **MongoDB** (local or MongoDB Atlas) – [Sign up for MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or [Download MongoDB](https://www.mongodb.com/try/download/community) for local installation.

### Step 1: Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/paytm-app.git
cd paytm-app
```

### Step 2: Install Backend Dependencies

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install the necessary backend dependencies:

   ```bash
   npm install
   ```

   This will install all the required packages for the backend, including Express, MongoDB, and other dependencies.

### Step 3: Configure MongoDB

- If you're using **MongoDB Atlas**, get your connection string from your MongoDB Atlas dashboard.
- If you're running **MongoDB locally**, ensure MongoDB is running on the default port (`27017`) or use a custom URI if required.

Once you have your MongoDB URI, create a `.env` file in the `backend` directory and add the following content:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

- Replace `your_mongodb_connection_string` with the actual MongoDB connection string.
- Set a secure `JWT_SECRET` for signing JWT tokens.

### Step 4: Install Frontend Dependencies

1. Navigate to the frontend folder:

   ```bash
   cd ../frontend
   ```

2. Install the necessary frontend dependencies:

   ```bash
   npm install
   ```

   This will install React, Tailwind CSS, and other dependencies required for the frontend.

### Step 5: Start the Backend Server

In the `backend` directory, run the following command to start the backend server:

```bash
node index.js
```

This will start the Express backend server, which will run on the default port (5000) or the port specified in your `.env` file.

### Step 6: Start the Frontend Application

In the `frontend` directory, run the following command to start the React development server:

```bash
npm start
```

This will launch the frontend application, which will run on `http://localhost:3000`.


### Step 7: API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login and authenticate the user to get a JWT token.
- **POST /api/transfer**: Transfer money to another user (requires JWT token in the request header).

### Step 9: Testing the Application

1. **Register a user**: Use the `/api/auth/register` endpoint to create a new user.
2. **Login**: Use the `/api/auth/login` endpoint to log in and get the JWT token.
3. **Transfer money**: Use the `/api/transfer` endpoint to transfer money to another user. You'll need to pass the JWT token in the `Authorization` header for this request.

---


