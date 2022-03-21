FROM alpine:3.15.1

WORKDIR /tmp

RUN apk --no-cache add curl
