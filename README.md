# FlixAI

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white) ![Appwrite](https://img.shields.io/badge/Appwrite-1C1C1C?logo=appwrite&logoColor=white)

FlixAI is a modern movie browsing application built using React and Tailwind CSS. It integrates Appwrite for backend authentication and features dynamic content management. 

## Features

### 🎬 Login & Signup

- **Sign In / Sign Up Form**: A single form that switches between login and signup based on a state variable.
- **Form Validation**: Ensures the user inputs are valid before submission.
- **Appwrite Authentication**: Secure user login and registration using Appwrite's backend service. and created custom Hooks for signup/signin
- **Redux-Toolkit**: created appStore using redux to store user data after signup or signin
  
### 🍿 Browse Movies (After Authentication)

- **Header**: Displays the application header with navigation.
- **Main Movie**: Displays a featured movie with:
  - Trailer in the background
  - Movie title and description
  - Movie suggestions (multiple rows of movies)
  
### 🔍 Search & Movie Suggestions

- **Search Bar**: Quickly find movies with live search results.
- **Movie Suggestions**: Get personalized recommendations based on your preferences.

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs without writing CSS.
- **React Router DOM**: Handles navigation and routing within the app.
- **Appwrite**: Backend-as-a-Service (BaaS) for handling user authentication and data.


