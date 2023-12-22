#stage 1
FROM node:16.14.0 as build
WORKDIR /app
COPY . .
RUN npm install
RUN node_modules/.bin/ng build --base-href /login-unico/

#stage 2
FROM nginx:1.25.3-alpine3.18
# Copiamos nuestro archivo de configuracion.
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/login-unico/ /usr/share/nginx/html
COPY --from=build /app/dist/login-unico/ /usr/share/nginx/html/login-unico