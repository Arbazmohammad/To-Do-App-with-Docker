
# 📝 To-Do App with Docker

[![Docker Pulls](https://img.shields.io/docker/pulls/arbazmd939/getting-started-todo-app.svg)](https://hub.docker.com/r/arbazmd939/getting-started-todo-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A simple To-Do list application containerized using Docker. This project demonstrates how to build, run, and push a Dockerized app to Docker Hub.

---

## 📸 Screenshot

> _Update this with a real screenshot if available_

![App Screenshot](https://via.placeholder.com/800x400.png?text=To-Do+App+Screenshot)

---

## 🚀 Features

- Create, update, and delete tasks  
- Lightweight and easy to deploy  
- Fully containerized  
- Push/pull ready with Docker Hub

---

## 🧱 Tech Stack

- **Frontend**: *(e.g., HTML/CSS/React)*
- **Backend**: *(e.g., Node.js + Express)*
- **Containerization**: Docker

## Application architecture

![image](https://github.com/docker/getting-started-todo-app/assets/313480/c128b8e4-366f-4b6f-ad73-08e6652b7c4d)

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

## 🐳 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/getting-started-todo-app](https://github.com/Arbazmohammad/To-Do-App-with-Docker.git
cd getting-started-todo-app
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

## ⚙️ GitHub Actions (Optional CI/CD)

> _You can set up CI/CD using GitHub Actions to build and push your Docker image automatically._

Example:  
`.github/workflows/docker-publish.yml`

```yaml
name: Docker Publish

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Build and Push
        uses: docker/build-push-action@v4
        with:
          push: true
          tags: arbazmd939/getting-started-todo-app:latest
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
