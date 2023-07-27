# Running the Full-Stack Application

This document provides a step-by-step guide on how to run the Full-Stack CRUD Application, which consists of a frontend developed using React with Vite and a backend built with Node.js and Express. The application allows users to perform CRUD operations on a user entity.

## Prerequisites
Before proceeding with the setup, ensure you have the following prerequisites installed on your system:

1. Node.js: Download and install Node.js from the official website: https://nodejs.org
2. Git: Install Git from https://git-scm.com/downloads

## Setup and Run

1. Clone the Repository:
   ```
   git clone https://github.com/Anshad-mk/BrainwiredMachineTest.git
   ```

2. Navigate to the project directory:
   ```
   cd BrainwireMechineTest
   ```

3. Install Backend Dependencies:
   ```
   cd backend
   npm install
   ```

4. Install Frontend Dependencies:
   ```
   cd ../frontend
   npm install
   ```

5. Run the Backend Server:
   ```
   cd ../backend
   npm start
   ```
   The backend server will start running on `http://localhost:3000`.

6. Run the Frontend Application:
   ```
   cd ../frontend
   npm run dev
   ```
   The frontend application will start running on `http://localhost:5173`.

## Using the Application

The Full-Stack CRUD Application provides the following functionality:

1. Add a User:
   - Enter the user's first name, last name, date of birth, and address in the provided form.
   - Click the "Add User" button to add the user to the database.

2. View User Details:
   - The table on the frontend displays the list of users stored in the database.
   - Click on the user's ID in the table to view their details.

3. Edit User Details:
   - After viewing the user details, click the "Edit" button to update the user's information.
   - Modify the user's details in the form that appears, and click the "Save Changes" button.

4. Delete a User:
   - In the user details view, click the "Delete" button to remove the user from the database.

## Conclusion

Congratulations! You have successfully set up and launched the Full-Stack CRUD Application from the provided GitHub repository. The application allows you to perform CRUD operations on user entities using the frontend React application and the backend Node.js and Express API.

If you encounter any issues or have any questions, please feel free to reach out for assistance.

Happy coding!
