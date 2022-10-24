FROM node:10-alpine

WORKDIR /usr/app
COPY package.json yarn-error.log ./

RUN yarn

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]