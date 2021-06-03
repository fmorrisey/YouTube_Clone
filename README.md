# React MERN YouTube Clone

- M : MongoDB
- E : Express
- R : React / Material-UI
- N : Node

## Setup

Create .env file inside the backend directory that includes:

```

ATLAS_URI= <MONGODB CONNECTION STRING>

```

## Getting Started without Docker

From the root directory, run the following commands:

For the very first build run:

- cd to project root at ~\Youtube_Clone
- `$ npm run dev` will launch a concurrently script
- see results in the terminal

## Getting Started with Docker

From the root directory, run the following commands:

For the very first build run:

- `$ docker-compose build`

Then every time after that:

- `$ docker-compose up -d`
  Remove the `-d` if you want console read out and warnings

- these two steps can be combined into one command `$ docker-compose up --build -d`

Your Node Backend server will be running at `http://localhost:5000` and your client application will be running at `http://localhost:3000`

To stop the services:

- `$ docker compose-stop`

To kill the services:

- `CTRL + C` and then `$ docker compose-down`

### Troubleshooting

If your container fails to build or exits with an error code
`docker build -t <APP_NAME> .`

## Project Update:

- 01/24/2021: Docker-Compose tested and App Container deploys
- 02/25/2021: Material-UI Core integrated into the project to match YouTube's theme
- 05/25/2021: Added MongoDB server support for comments
