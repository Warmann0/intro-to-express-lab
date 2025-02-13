Express App - Homework Assignment

Overview

This is a simple Express.js application with a few routes for practicing Express basics, including route parameters, query parameters, and filtering data. The application also uses Morgan for logging requests.

Installation & Setup

Prerequisites

Node.js installed on your system

npm (Node Package Manager)

Steps to Run the Application

Clone this repository or copy the files.

Install dependencies using:

npm install express morgan

Start the server:

node app.js

The application will run on http://localhost:3000

API Endpoints

1. Greeting a User

Endpoint: GET /greetings/:username

Description: Returns a greeting message to the specified username.

Example:

curl http://localhost:3000/greetings/Nate

Response: Hello there Nate

2. Rolling a Dice

Endpoint: GET /roll/:numberParameter

Description: Generates a random number between 1 and the specified number.

Example:

curl http://localhost:3000/roll/10

Response: You rolled 7

3. Fetch a Collectible Item

Endpoint: GET /collectibles/:index

Description: Retrieves an item from the collectibles array based on the given index.

Example:

curl http://localhost:3000/collectibles/1

Response: Hell yea this autographed picture of a dog? For 10 is super good deal, it can be yours!

4. Fetch Shoes Based on Filters

Endpoint: GET /shoes

Query Parameters:

minPrice (optional) → Filters shoes above a certain price

maxPrice (optional) → Filters shoes below a certain price

type (optional) → Filters shoes by type (e.g., sneaker, boot, sandal)

Example Requests:

curl "http://localhost:3000/shoes?minPrice=100"
curl "http://localhost:3000/shoes?maxPrice=200"
curl "http://localhost:3000/shoes?type=sneaker"

Logging

This app uses Morgan for request logging in the dev format.

Running the Server

The application starts on port 3000. Once running, visit http://localhost:3000 and try out the different routes.

License

This project is for learning purposes only. No license is required.