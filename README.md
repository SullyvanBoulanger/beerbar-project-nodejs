# beerbar-project-nodejs

- [beerbar-project-nodejs](#beerbar-project-nodejs)
  - [Instructions](#instructions)
  - [Installation](#installation)
  - [Start the project](#start-the-project)

## Instructions

[Link to the instructions](./instructions.md)

## Installation

1. Install dependencies

```bash
npm i
```

2. Configure your `.env` file like follow

```js
// This app uses SQLITE, you can specify the path where you want to be your database file or use yours.
// Default value : db.sqlite
DATABASE_PATH=...
// Configure your port where the server will run
// Default value : 3000
PORT=...
```

## Start the project

1. Start server

```bash
npm start
```
