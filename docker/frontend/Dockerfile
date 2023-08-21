FROM node:lts-buster
USER root
WORKDIR /home/app
COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./
RUN yarn
COPY ./frontend/ ./
COPY ./libs/ ./libs/
EXPOSE 3000
CMD [ "yarn", "start" ]