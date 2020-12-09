FROM node:14-alpine as build

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY tsconfig.build.json .
COPY ./packages/common ./packages/common
COPY ./packages/service-a ./packages/service-a

RUN yarn install --pure-lockfile --non-interactive

RUN yarn workspace @monodemo/service-a build

FROM node:14-alpine

WORKDIR /usr/src/app

COPY ../../package.json .
COPY ../../yarn.lock .

COPY --from=build /usr/src/app/packages/common/package.json /usr/src/app/packages/common/package.json
COPY --from=build /usr/src/app/packages/common/dist /usr/src/app/packages/common/dist

COPY --from=build /usr/src/app/packages/service-a/package.json /usr/src/app/packages/service-a/package.json
COPY --from=build /usr/src/app/packages/service-a/dist /usr/src/app/packages/service-a/dist

ENV NODE_ENV production

RUN yarn install --pure-lockfile --non-interactive --production

CMD yarn workspace @monodemo/service-a start
