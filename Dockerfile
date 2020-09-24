FROM ubuntu:18.04 as ubuntu
VOLUME .
FROM trion/ng-cli:10.1.0 as builder
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci  --debug
COPY . .
RUN ng build --prod

ENV PATH /app/node_modules/.bin:$PATH

FROM nginx:1.17.5
COPY .nginx/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY .nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder  /app/dist/music-all-front /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
