FROM node:latest
# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN yarn install
RUN yarn install react-scripts@3.4.1 -g
# add app
ADD . /usr/src/app
# start app
CMD ["yarn", "start"]
