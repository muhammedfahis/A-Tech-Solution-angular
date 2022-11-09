FROM node:14.19.1 as buildFile
WORKDIR /var/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx 
EXPOSE 80
COPY --from=buildFile /var/app/dist/vegitable-store /usr/share/nginx/html