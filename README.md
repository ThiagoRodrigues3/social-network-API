# Social Media Back-End API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Social Media Back-End API](#social-media-back-end-api)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Users](#users)
    - [Thoughts](#thoughts)
  - [License](#license)

## Description

This is a Back-End API for a social media website using MongoDB as the database.

## Installation

 `npm install` to bring in the packages. After that, you can use `npm start` to start the server.

## Usage

You can do the following API calls once this is operational:
### Users
- `/api/users` - **GET** - Get all of the users.
- `/api/users/:id` - **GET** - Get one user by ID. This will include all there friends and thoughts as well.
- `/api/users` - **POST** - Create a new user. In the body, it must include `username` and `email`.
- `/api/users/:id` - **PUT** - Update one user by ID. In the body, include the properties you want updated.
- `/api/users/:id` - **DELETE** - Remove one user by their ID. This will also remove any thoughts that were linked to them.
- `/api/users/:userId/friends/:friendId` - **POST** - Adds the friend's ID to the list of the friends of the user (based on ID).
- `/api/users/:userId/friends/:friendId` - **DELETE** - Removes the friend's ID to the list of the friends of the user (based on ID).
### Thoughts
- `/api/thoughts` - **GET** - Get all of the thoughts.
- `/api/thoughts/:id` - **GET** - Get one thought by ID.
- `/api/thoughts` - **POST** - Create a new thought. In the body, it must include `thoughtText`, `username`, and `userId`.
- `/api/thoughts/:id` - **PUT** - Update one thought by ID. In the body, include the properties you want updated.
- `/api/thoughts/:id` - **DELETE** - Remove one thought by their ID.
- `/api/thoughts/:thoughtId/reactions` - **POST** - Adds a reaction to the list of reactions of the thought (based on ID). In the body, it must include `username`, and `reactionBody`.
- `/api/thoughts/:thoughtId/reactions` - **DELETE** - removes a reaction to the list of reactions of the thought (based on ID). In the body, it must include the `reactionId`.

[A video demonstration can be found here](https://drive.google.com/file/d/1cBcOo9c-gF_TLTG0txJqBUMeMGEYpAkA/view?usp=sharing).


## License

This project is licensed under a [MIT license](https://opensource.org/licenses/MIT).
