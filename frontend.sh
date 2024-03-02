#!/bin/bash

cd client

rm -rf node_modules/.vite/
npm cache clean --force

npm i && npm run dev
