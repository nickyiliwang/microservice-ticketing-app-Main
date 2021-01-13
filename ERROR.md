On the initial setup of the auth-srv, the ts-node-dev refuses to work with skaffold, and it's always getting npm errors! after alot of searching this post: https://stackoverflow.com/questions/62213049/how-to-fix-typeerror-err-feature-unavailable-on-platform-when-using-ts-node

helped solved it with changing the Dockerfile
FROM node:alpine to
FROM node:lts-alpine

and changing the start script from
ts-node-dev src/index.ts to
ts-node-dev src/index.ts --poll
