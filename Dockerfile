FROM alpine:3.18.4

WORKDIR /tmp

RUN apk --no-cache add curl
