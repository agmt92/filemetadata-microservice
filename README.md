# File Metadata Microservice

This is the boilerplate for the File Metadata Microservice test.

## Project Links

- **Front End**: [File Metadata Microservice](https://filemetada-microservice-0402d86def70.herokuapp.com/)
- **Test Page**: [freeCodeCamp Test Page](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice)

## Overview

The File Metadata Microservice is a simple application that allows users to upload a file and receive metadata about the file in return. This project is part of the freeCodeCamp curriculum for learning APIs and microservices.

## Features

- **File Upload**: Users can upload a file through a form.
- **File Metadata**: The application returns metadata about the uploaded file, including the file name, type, and size.
- **File List**: Users can view a list of all uploaded files with their metadata.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database to store file metadata.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads.
- **Bootstrap**: CSS framework for styling the front end.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/freeCodeCamp/boilerplate-project-filemetadata.git
   cd file-metadata-microservice
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

- **POST /api/fileanalyse**: Upload a file and receive metadata about the file.
- **GET /api/fileanalyse**: Retrieve a list of all uploaded files with their metadata.

## Usage

1. **Upload a File**: Use the form on the front page to upload a file.
2. **View File Metadata**: After uploading, you will receive metadata about the file.
3. **View Uploaded Files**: Click the "Show Uploaded Files" button to view a list of all uploaded files with their metadata.

## License

This project is licensed under the MIT License. See the [freeCodeCamp](https://www.freecodecamp.org/) page for details.

## Acknowledgments

- [freeCodeCamp](https://www.freecodecamp.org/) for providing the project idea and learning platform.