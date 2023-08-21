FROM node:lts-buster
USER root
WORKDIR /home/app
COPY ./backend/package.json ./
COPY ./backend/yarn.lock ./
RUN yarn
COPY ./backend/ ./
COPY ./libs/ ./libs/
EXPOSE 8998
CMD [ "yarn", "start:dev" ]