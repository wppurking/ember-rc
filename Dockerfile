FROM node:0.12.7
MAINTAINER Wyatt Pan <wppurking@gmail.com>

ADD ./ /app

RUN npm install -g bower ember-cli && cd /app && npm install --verbose

WORKDIR /app
CMD ['ember s -prod']
