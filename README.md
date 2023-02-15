# Simple Math API

This is a simple API that provides a single endpoint for performing math calculations. It uses TypeScript, Node.js and Express.

# Requirements

This project uses the following dependencies:

- Node.js
- Express
- Jest
- Nodemon

## Installation

To install this project alognside it's dependencies run the following command in the project directory:

    npm install

## Usage

To start the server you first need to build the TypeScript files into JavaScript using:

    npm run build

Afterwards you can start the server using

    npm run start

Alternatively you can use

    npm run dev

to run the project with livechanges

The API has a single endpoint for performing math calculations:

#### POST /calculate

This endpoint takes a JSON payload with a single property: expression. The value of expression should be a mathematical expression that uses the following operators:

"+" (addition)
"-" (subtraction)
"\*" (multiplication)
"/" (division)

The expression can also include parentheses for grouping.
The response will be a JSON object with a single property called "result".

## Running Tests

You can run tests for the calculate function using:

    npm run test

## Extra Information

A postman collection was included in the repository to help with testing.
