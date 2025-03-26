# To-Do App with Joke Integration

This is a simple to-do app built with React, Redux Toolkit, and Vite. It allows users to add, prioritize, and delete tasks while fetching a random joke every time a task is added.

## Features
- Add tasks with automatic low priority.
- Prioritize tasks as High, Medium, or Low.
- Delete tasks with ease.
- Fetch a random joke from the [Official Joke API](https://official-joke-api.appspot.com) whenever a task is added.
- Tasks persist in localStorage.

## Tech Stack
- Vite
- React
- Redux Toolkit
- Axios

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-app-joke-integration.git
   cd todo-app-joke-integration
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to the URL provided in the terminal (usually `http://localhost:5173/`).

## Project Structure
```
/src
├── components
│   └── TaskList.jsx
├── redux
│   └── features
│       └── to-do
│           ├── tasksSlice.js
│           └── store.js
└── App.jsx
└── main.jsx
```

## API Integration
- **Joke API:** Fetches a random joke from `https://official-joke-api.appspot.com/jokes/random` when a task is added.
- Error handling is implemented to show alerts if the API fails.

![Alt text](path/to/image)

## Screenshot
![Todo App Login Screenshot](https://github.com/Sarva197/To-Do-App-with-API-Integration/blob/main/Screenshot%202025-03-26%20192208.png?raw=true)
![Todo App Screenshot 1](https://github.com/Sarva197/To-Do-App-with-API-Integration/blob/main/Screenshot%202025-03-26%20192246.png?raw=true)
![Todo App Screenshot 2](https://github.com/Sarva197/To-Do-App-with-API-Integration/blob/main/Screenshot%202025-03-26%20192304.png?raw=true)
![Todo App Screenshot 3](https://github.com/Sarva197/To-Do-App-with-API-Integration/blob/main/Screenshot%202025-03-26%20192346.png?raw=true)


## Acknowledgments
- [Official Joke API](https://official-joke-api.appspot.com) for providing jokes.
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management.

## License
---.

---


