FROM jseparovic/alpine-node

WORKDIR /app

RUN mkdir -p /app
COPY package.json /app
COPY src /app/src
COPY tsconfig.json /app

RUN ls -l /app

ARG REBUILD=1
RUN echo $REBUILD; yarn install && yarn run build

# Run the app
CMD [ "yarn", "start" ]
