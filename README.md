
# 📝 To-Do App with Docker

[![Docker Pulls](https://img.shields.io/docker/pulls/arbazmd939/getting-started-todo-app.svg)](https://hub.docker.com/r/arbazmd939/getting-started-todo-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A simple To-Do list application containerized using Docker. This project demonstrates how to build, run, and push a Dockerized app to Docker Hub.

---

## 🚀 Features

- Create, update, and delete tasks  
- Lightweight and easy to deploy  
- Fully containerized  
- Push/pull ready with Docker Hub

---

## 🧱 Tech Stack

- **Frontend**: *(React)*
- **Backend**: *(Node.js)*
- **Containerization**: Docker

---

## 🐳 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Arbazmohammad/To-Do-App-with-Docker.git
cd To-Do-App-with-Docker
```

### 2. Build the Docker Image

```bash
docker build -t arbazmd939/getting-started-todo-app .
```

### 3. Run the Container

```bash
docker run -d -p 80:80 arbazmd939/getting-started-todo-app
```

✅ Open in browser: **http://localhost**

---

## 📦 Docker Hub

Image hosted on Docker Hub:  
👉 [Docker Hub Link](https://hub.docker.com/r/arbazmd939/getting-started-todo-app)

To pull the image:

```bash
docker pull arbazmd939/getting-started-todo-app:latest
```

## Application architecture

![image](https://github.com/docker/getting-started-todo-app/assets/313480/c128b8e4-366f-4b6f-ad73-08e6652b7c4d)


This sample application is a simple React frontend that receives data from a
Node.js backend. 

When the application is packaged and shipped, the frontend is compiled into
static HTML, CSS, and JS and then bundled with the backend where it is then
served as static assets. So no... there is no server-side rendering going on
with this sample app.

During development, since the backend and frontend need different dev tools, 
they are split into two separate services. This allows [Vite](https://vitejs.dev/) 
to manage the React app while [nodemon](https://nodemon.io/) works with the 
backend. With containers, it's easy to separate the development needs!

## Development

To spin up the project, simply install Docker Desktop and then run the following 
commands:

```
git clone https://github.com/docker/getting-started-todo-app
cd getting-started-todo-app
docker compose up -d
```

You'll see several container images get downloaded from Docker Hub and, after a
moment, the application will be up and running! No need to install or configure
anything on your machine!

Simply open to [http://localhost](http://localhost) to see the app up and running!

Any changes made to either the backend or frontend should be seen immediately
without needing to rebuild or restart the containers.

To help with the database, the development stack also includes phpMyAdmin, which
can be access at [http://db.localhost](http://db.localhost) (most browsers will 
resolve `*.localhost` correctly, so no hosts file changes should be required).

### Tearing it down

When you're done, simply remove the containers by running the following command:

```
docker compose down
```
---

## 🛠️ Folder Structure

```
├── Dockerfile
├── app/
│   ├── server.js
│   └── ...
├── package.json
└── README.md
```

---
