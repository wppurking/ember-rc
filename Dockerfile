FROM index.alauda.cn/library/node:0.12.7
MAINTAINER Wyatt Pan <wppurking@gmail.com>

WORKDIR /tmp
ADD ./package.json package.json
ADD ./bower.json bower.json
RUN npm install -g bower ember-cli && npm install && bower install

# cache for bower and npm
ADD ./ /app

EXPOSE 4200
WORKDIR /app
CMD ['/usr/local/bin/ember s -prod']
