# Estágio 1: Build da Aplicação React
FROM node:20-alpine AS build

WORKDIR /app


COPY frontend/package.json frontend/package-lock.json ./

RUN npm install


COPY frontend/. .

RUN npm run build


# Estágio 2: Servir os Arquivos com Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf


COPY docker/frontend/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]