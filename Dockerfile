FROM node:0.12.7
MAINTAINER Wyatt Pan <wppurking@gmail.com>

ADD ./ /app/ember-rc
RUN npm i

WORKDIR /app/ember-rc
CMD ['ember s -prod']
