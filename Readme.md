<div align="center">

# 🚀 DevOps Quote Generator

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![AWS](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

A containerized web application built during the **42-Hour Applied DevOps Engineering with CI/CD** workshop.
Served via **Nginx inside Docker**, deployed on **AWS EC2**.

</div>

---

## 📸 Project Overview

> A responsive quote generator themed around DevOps & software engineering wisdom.
> Supports **dark/light mode** toggle and displays random quotes on click.

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Web Server | Nginx |
| Container | Docker |
| Cloud | AWS EC2 (Ubuntu) |
| CI/CD | Jenkins |
| Terminal | MobaXterm |

---

## 🐳 Docker

### Dockerfile
```dockerfile
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY style.css  /usr/share/nginx/html/style.css
COPY script.js  /usr/share/nginx/html/script.js

EXPOSE 80
```

### Commands Used
```bash
# Build image
docker build -t devops-quote-app .

# Run container (localhost:8080 → container:80)
docker run -d --name webserver -p 8080:80 devops-quote-app

# Useful commands
docker ps                        # running containers
docker ps -a                     # all containers including stopped
docker logs webserver            # view logs
docker inspect webserver         # full container metadata
docker exec -it webserver sh     # shell inside container

# Cleanup (container first, then image)
docker stop webserver
docker rm webserver
docker rmi devops-quote-app
```

### Push to Docker Hub
```bash
docker tag devops-quote-app <dockerhub-username>/devops-quote-app
docker push <dockerhub-username>/devops-quote-app
```

---

## 🐧 Linux & AWS EC2

### Connect to EC2
```bash
chmod 400 "kle-server.pem"
ssh -i "kle-server.pem" ubuntu@<ec2-public-ip>
```

### User Management
```bash
sudo useradd -m username      # create user
sudo passwd username          # set password
id username                   # check UID, groups
su - username                 # switch user
sudo deluser username         # delete user
```

### File Permissions
```
chmod 764 file  →  owner: rwx (7) | group: rw (6) | others: r (4)

r = 4 | w = 2 | x = 1

chmod u+x file    # add execute for owner
chmod g-w file    # remove write from group
chown user file   # change file ownership
```

### System Monitoring
```bash
df -h                            # disk usage
du -sh /*                        # folder sizes
free -h                          # RAM usage
uptime                           # load averages (1m 5m 15m)
ps aux --sort=-%mem | head -20   # top memory processes
top / htop                       # real-time monitor
```

### Log Analysis
```bash
sudo tail -f /var/log/syslog          # live logs
sudo grep error /var/log/syslog       # search errors
grep -n ERROR app.log                 # with line numbers
grep -ri "error" .                    # recursive, case-insensitive
find . -name "*.log" -exec grep ERROR {} \;   # find + grep
```

---

## ⚙️ Jenkins — CI/CD Pipeline

```
Developer pushes code
        ↓
Webhook triggers Jenkins
        ↓
Pull latest code → Build → Test → Deploy
```

### Setup on Ubuntu EC2
```bash
sudo apt update
sudo apt install fontconfig openjdk-21-jre
sudo apt install jenkins
sudo systemctl start jenkins && sudo systemctl enable jenkins

# Initial admin password
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```
> Jenkins dashboard runs at `http://<ec2-ip>:8080`

---

## 🗂️ Docker Cheatsheet

| Command | Purpose |
|---|---|
| `docker pull <image>` | Download from Docker Hub |
| `docker build -t name .` | Build image from Dockerfile |
| `docker run -d -p host:container <image>` | Run in background |
| `docker exec -it <name> sh` | Shell inside container |
| `docker logs <name>` | View container logs |
| `docker inspect <name>` | Full container metadata |
| `docker rm <name>` | Remove container |
| `docker rmi <image>` | Remove image |

---

## 📌 What's Next

- [ ] Write a multi-stage Dockerfile
- [ ] Use `docker-compose` for multi-container setup
- [ ] Write and understand a `Jenkinsfile` from scratch
- [ ] Automate Docker Hub push via Jenkins
- [ ] Explore Kubernetes — pods, deployments, services
- [ ] Set up Prometheus + Grafana for monitoring

---

## 📜 Certificate

**42-Hour Certificate Course on Applied DevOps Engineering with CI/CD**
KLE Society's P.C. Jabin Science College × Seminarroom Education Pvt. Ltd
Academic Year 2025–26

---

<div align="center">
<i>Built with curiosity, broken things, and a lot of terminal output.</i>
</div>