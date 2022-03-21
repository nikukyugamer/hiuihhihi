FROM alpine:3.15.0

WORKDIR /tmp

RUN apk --no-cache add curl
