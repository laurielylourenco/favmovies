
FROM node:20-alpine AS build


WORKDIR /app


COPY package.json package-lock.json ./


RUN npm install


COPY . .


CMD ["npm", "run", "dev", "--", "--host"]