#!/bin/bash

cd api

rm -rf node_modules
npm cache clean --force

npm install

npm update

nodemon index.js
