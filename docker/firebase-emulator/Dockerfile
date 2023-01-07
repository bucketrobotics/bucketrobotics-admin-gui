FROM node:19
RUN apt-get update && apt-get install -y default-jdk && rm -rf /var/lib/apt/lists/*
RUN npm install -g firebase-tools
ENTRYPOINT ["firebase", "emulators:start"]