# TipTap MCQ

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- TipTap Editor : Implements Tiptap with configurations for both edit (instructor mode) and view (student mode).
- MCQ Extension: A custom extension for Tiptap that allows instructors to embed multiple choice questions within the editor. Instructors can add, edit, and manage MCQs.
- API - API calls to an express backed that handles submissions from students, and stores question in redis
- Automatic MCQ creation - Leverages LLM for creating MCQ based on prompt given from user

## Prerequisites

Make sure you have the backend running. THe code could be found [here](https://github.com/NexFlare/TipTap-Express)

## Available Keyboard Shortcuts

`CMD + /` Uses Google's Generative AI to create MCQ based to selected prompt \
`Enter` In MCQ node thiscommand makes sure correct name is assigned to radio button to prevent multiple selections \
`CMD + Enter` To exit MCQ node at any time.

## Available Scripts

In the project directory, you can run:

#### `npm init`

Install all the required dependencies

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Technology Used

- React
- Typescript
- Tailwind
