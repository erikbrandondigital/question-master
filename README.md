# Question Master

Question Master is a revolutionary new platform built for all answer-question reversal game show fans. With Question Master, anyone can level up their skills by testing their knowledge and trying their hand at answering real game show clues. As a part of our initial offering, Question Master will feature two ways for users to level up their skills. First, users can play a solo version of the Answers game, complete with a familiar game board you may have seen on television. In the main game, users can practice their clue choice strategy as they attempt to answer all the questions. Second, users can practice their Final Answer skills by answering real Final Answer questions. As a part of the experience, the Question Master platform will keep track of a user's statistics, including the number of questions they've attempted, answered correctly, and answered incorrectly, for both the Answer game and Final Answer, to provide the user with their own unique success rate. As the platform grows, there may be an opportunity for game show companies to utilize the Question Master platform as a screening tool for future reality tv game shows, which would provide our top-performing users with an opportunity to appear on other answer-question reversal reality game shows in person. So, the only question is, “Do you have what it takes?”

## Pages & Features

1. **Dashboard** - The Dashboard page will be the first page that the user sees when they visit the Question Answer platform. On this page, the user will see their stats and they will have the option to continue practicing either of the two games modes - Answers or Final Answer.

2. **Answers** - The Answers page will feature the main Answers game board loaded with questions from the jService API. The user will select a clue on the board, which will trigger a modal window displaying the clue. In the modal window, the user will enter their answer into an input field and click a “check answer” button, which will check the user’s answer, update their statistics & display a message indicating whether they got the question correct or incorrect. After, checking their answer, the user will then select another clue on the board from the remaining available clues. When the entire board is cleared, a new board will be presented to the user so they can continue practicing.

3. **Final Answer** - The Final Answer page will feature a Final Answer clue loaded from the jService API with an input field at the bottom of the screen where the user can enter their answer and click a “check answer” button, which will check the user’s answer, update their statistics & display a message indicating whether they got the question correct or incorrect. After checking their answer, a new Final Answer clue will be presented to the user so they can continue practicing.

4. **Account** - The Account page will feature a form containing all the user’s information that they have entered into the Question Master platform that they can update at any time. Additionally, there will be a “reset stats” button that users can click to reset their statistics should they wish to start from scratch.

## Design System

For the Question Master platform, I’ve decided to utilize the Orbit Design System created by Kiwi.com because I believe that the overall appearance and functionality of the Orbit Design System will enhance the experience of the Question Master platform for all users by creating a simple, colorful, and easy-to-use web application user interface and user experience. The only change that I’m making to the Orbit Design System is the primary color of the design system because Kiwi.com, the creator of the Orbit Design System, has a green color scheme. Instead of green, I’m planning on substituting their primary color for their blue status color because the most popular answer-question reversal game show has a blue color scheme.

## Technologies

### Application Programming Interfaces (APIs):

- Utilizing [jService.io](https://github.com/sottenad/jService), which is a free Jeopardy API containing categories and clues from the real TV game show, Question Master will provide users with an authentic experience featuring real Jeopardy clues and answers.

### Client Frontend - User Interface & User Experience (UI/UX):

- [React](https://react.dev) - Frontend Framework
- [React Router](https://reactrouter.com) - Asynchronous Navigation
- [React Icons](https://react-icons.github.io/react-icons/) - Iconography
- [Styled Components](https://styled-components.com) - CSS-IN-JS Styling
- [Axios](https://axios-http.com) - Querying User Data & Statistics
- [Mongoose](https://mongoosejs.com) - Saving User Data & Statistics To Server Backend
- [ShepherdJS](https://github.com/shipshapecode/shepherd) - Onboarding (Tentative)

### Server Backend:

- Utilizing [ExpressJS](https://expressjs.com) and [MongoDB](https://www.mongodb.com), a custom API will be built to store user data and statistics.

### Containerization / Virtualization

- [Docker](https://www.docker.com)

## Documentation

The docs folder within this repo contains the following information and resources:

1. [Design Files (Figma Prototype)](./docs/design)
2. [Milestone Changelogs](./docs/milestones)

## Prerequisites

The following programming languages, package managers, services & web browsers are required to run the application.

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) or [Docker Engine](https://docs.docker.com/engine/install/)
- [mise-en-place)](https://mise.jdx.dev) or [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) (Optional but Recommended)
- NodeJS >= v22.17.0
- NPM >=v10.9.2
- MongoDB Server >= v6.0.6 Community
- Chome/Firefox/Safari/Edge >= Latest 2 major versions.

## Install

To get the project up and running make sure that you have all of the required prerequisites listed in the previous section installed on your system. Then follow the steps below:

1. Clone the **main** branch of the repo to your machine.

```
git clone https://github.com/erikbrandondigital/question-master.git
```

2. Open the **Project Folder**:

```
cd question-master
```

3. Create a **.env** file in the **client**, **server**, and **jservice** folders by copying & renaming each **env.example** file to **.env**.

```
cp src/client/.env.example src/client/.env && \
cp src/server/.env.example src/server/.env && \
cp src/jservice/.env.example src/jservice/.env
```

1. Update the Environment Variables in the **client**, **server**, and **jservice** folders to your desired settings using the [Environment Variables Reference](#environment-variables-reference) section. The defaults should work out of the gate but can be customized as needed.

2. Run `docker-compose up --build -d` to build and start the application.
   - You can skip the `--build` flag if you already built the application before or the `-d` flag if you want to attach to the Docker container when the application starts up.

## Uninstall

To uninstall the project, follow the steps below:

1. Run `docker-compose down -v` to stop and delete the running Docker containers and the network and storage volumes.
   - You can skip the `-v` flag if you want to keep the data stored in the database.

2. Delete the project folder from your machine and uninstall anything in the [Prerequisites](#prerequisites) section that you no longer want to keep.

## Environment Variables Reference

Below is a table containing the Environment Variables that can be set and or customized on the Express backend. All Environment Variables listed below are required to successfully run the application.

### Client

| Environment Variable | Default Value | Purpose                                                  |
| -------------------- | ------------- | -------------------------------------------------------- |
| `VITE_HOSTNAME`      | `localhost`   | The hostname where the project will be accessible from.  |
| `VITE_PROTOCOL`      | `http`        | The http protocol the project should use (http or https) |
| `VITE_SERVER_PORT`   | `3000`        | The port number where the server API is accessible.      |
| `VITE_JSERVICE_PORT` | `3001`        | The port number where the jService API is accessible     |
| `NODE_ENV`           | `production`  | The Node runtime environment (production or development) |

### Server

| Environment Variable | Default Value                             | Purpose                                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------------------ |
| `PORT`               | `3000`                                    | Port Number for the API.                                                 |
| `MONGODB_URI`        | `mongodb://mongodb:27017/question-master` | A MongoDB connection string containing the table name (question-master). |

### jService

| Environment Variable | Default Value | Purpose                                                                               |
| -------------------- | ------------- | ------------------------------------------------------------------------------------- |
| `RACK_ENV`           | `production`  | The Rails runtime environment (production, test, or development).                     |
| `POSTGRES_USERNAME`  | `postgres`    | The postgres username for the database.                                               |
| `POSTGRES_PASSWORD`  | `password`    | The postgres password for the database.                                               |
| `POSTGRES_PORT`      | `5432`        | The port number where the postgres service is accessible. (Default = 5432)            |
| `POSTGRES_HOST`      | `postgres`    | The hostname where the postgres service is accessible. (Postgres Docker Service Name) |

## NPM Scripts Reference

### Client package.json

| NPM Command        | Purpose                                                                        |
| ------------------ | ------------------------------------------------------------------------------ |
| `npm run dev`      | Starts the React application in dev mode using Vite.                           |
| `npm run build`    | Runs Vite build to create a production-ready build of the application.         |
| `npm run lint`     | Runs ESLint to identify linting & formatting issues.                           |
| `npm run lint:fix` | Runs ESLint to identify & fix linting & formatting issues.                     |
| `preview`          | Runs Vite in preview mode to view a production ready build of the application. |

### Server package.json

| NPM Command        | Purpose                                                    |
| ------------------ | ---------------------------------------------------------- |
| `npm start`        | Starts the Express backend using Node.                     |
| `npm run dev`      | Starts Express backend using Nodemon.                      |
| `npm run lint`     | Runs ESLint to identify linting & formatting issues.       |
| `npm run lint:fix` | Runs ESLint to identify & fix linting & formatting issues. |

## Links & Endpoints Reference

Below is a table containing the various URLs and endpoints available for you to interact with when the application is up and running.

| Name                        | Link/Endpoint                       |
| --------------------------- | ----------------------------------- |
| Client Application          | http://127.0.0.1:5173/              |
| Server API                  | http://127.0.0.1:3000/              |
| Server API (GET All Users)  | http://127.0.0.1:3000/users/        |
| Server API (GET User by ID) | http://127.0.0.1:3000/users/:userID |
| Server API (POST User)      | http://127.0.0.1:3000/users/        |
| Server API (PATCH User)     | http://127.0.0.1:3000/users/:userID |
| Server API (DELETE User)    | http://127.0.0.1:3000/users/:userID |
| jService API Status & Docs  | http://127.0.0.1:3001               |

## Acknowledgements

This project was originally developed using the publicly available jService API, originally developed and hosted by Sottenad, which was recently discontinued due to high hosting costs and made public on GitHub.

Thanks to a fork by NieldSWND, I was able to containerize and include a working copy of the original jService API in my project, enabling my project to continue to work locally using Docker without having to find an alternative source for clues or create my own fork.

So thank you both, Sottenad and NieldSWND, for developing and maintaining the jService API. Without the API, I wouldn't have been able to develop my skills as a full-stack developer by building Question Master. Thank you for your hard work!

- [jService API by Sottenad](https://github.com/sottenad/jService)
- [jService API fork by NieldSWND](https://github.com/NieldSWND/jService)

