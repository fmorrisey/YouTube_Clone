# React MERN Clone
- M : MongoDB
- E : Express
- R : React
- N : Node


## Setup

Create .env file inside the backend directory that includes:

```

ATLAS_URI= <MONGODB CONNECTION STRING>

```

## Getting Started

From the root directory, run the following commands:

For the very first build run:

- `$ docker-compose build`

Then every time after that:

- `$ docker-compose up -d`
Remove the `-d` if you want console read out and warnings

Your Node Backend server will be running at `http://localhost:5000` and your client application will be running at `http://localhost:3000`

To stop the services:

- `$ docker compose-stop`

To kill the services:

- `CTRL + C` and then `$ docker compose-down`

### Project Update:
- 01/24/2021: Docker-Compose tested and App Container deploys