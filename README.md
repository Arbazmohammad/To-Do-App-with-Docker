
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
