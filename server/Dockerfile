FROM node:16.16.0

WORKDIR /usr/api

COPY package*.json .

COPY .npmrc .

RUN apt-get update \
  && apt-get upgrade -y \
  && apt-get install -y \
  ca-certificates fonts-liberation libappindicator3-1 libasound2 \
  libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
  libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 \
  libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 \
  libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 \
  libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils \
  libdbus-glib-1-2 \
  && rm -rf /var/lib/apt/lists/* \
  && npm install --location=global npm \
  && npm install --location=global nodemon \
  && npm install

COPY . .

RUN mkdir -p build/config \
  && mkdir build/database \
  && mkdir build/temp \
  && mkdir build/logs \
  && cp -r ./src/config/envs ./build/config \
  && cp -r ./src/config/secrets ./build/config \
  && cp -r ./src/database/assets ./build/database
