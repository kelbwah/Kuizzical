#!/bin/bash

# Install and/or update dependencies
echo "Installing/updating packackes and dependencies for server and web client...\n"

# Starting front-end client
echo "Starting front-end...\n"
cd client
npm run dev &

# Starting the api server
echo "Starting the api server...\n"
cd ../api
nodemon index.js 

