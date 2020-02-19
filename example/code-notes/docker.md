---
title: Docker
tags:
  - devops
---

### Dockerfile examples

[https://docs.docker.com/develop/develop-images/dockerfile_best-practices/](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

```docker
FROM node:12.4.0-alpine
ENV NPM_CONFIG_LOGLEVEL info
WORKDIR /usr/src/app
EXPOSE 8080
ENTRYPOINT ["yarn", "start"]

RUN mkdir -p /usr/src/app
COPY . .
RUN yarn install && \
    yarn build && \
    yarn test && \
    yarn install --production && \
    rm -rf .git
```

### Build a Dockerfile locally

```docker
docker build .

# or

docker build -t $yourTagName .
```

### Run a Dockerfile locally

```docker
docker run -d -p 1717:1717 $yourTagName
```

### Docker commands

```docker
# list all running containers
docker ps

# stop/remove particular running container
docker rm -f $containerId

# stop all containers
docker rm -f (docker ps -aq)

# browse running container files
docker exec -it $containerId sh
```
