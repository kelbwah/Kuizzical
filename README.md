# Kuizzical 
Kuizzical is a free open-source application that allows students to get the grades they deserve. This project emerged after seeing countless other quiz-like applications that 
just seem to only offer so much at a free cost up until users are forced to pay for "premium" features. 

## Contributing
Contributions are welcome. Feel free to open a pull request with changes. See `CONTRIBUTING.md` for more info.

## Running it locally
First make sure to have node or nvm installed on your local machine. See [NVM Installation Guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) or [Node Installation Guide](https://nodejs.org/en/download) for more info.
- We use MongoDB and AWS for file storage and our database. So in the `api` folder, you will see `.example_env` where it gives the ENVIRONMENT variables needed to connect to a dev MongoDB cluster and AWS bucket.
- Copy and paste the contents of `.example.env` to a `.env` file that will hold real ENVIRONMENT variables.
- Going back to the root of the project, run `./backend.sh` to run the backend in `http://localhost:<YOUR PORT IN .env>`.
- Similarly in the root, run `./frontend.sh` to run the frontend in `http://localhost:5173/`.
- *Now you have the project running locally!*
