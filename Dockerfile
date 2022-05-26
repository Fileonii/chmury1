FROM scratch
ADD alpine-minirootfs-3.16.0-x86.tar.gz /
WORKDIR /usr/src/app
RUN apk add --update nodejs npm
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "main.js" ]



LABEL org.opencontainers.image.authors="filip jaslikowski"