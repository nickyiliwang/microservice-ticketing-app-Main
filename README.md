# App Tech (ref. App-Tech.JPG)

- NextJS SSR
- common library
- nodeJS
- mongodb
- redis
- Docker
- Kubernetes
- typescript
- testing (Jest ?)
- NATS Streaming Server (event-bus, not Network Access Translation)
- google cloud for dev with skaffold

NPM packages:

- typescript, ts-node-dev, @types/express

# Bypassing Chrome warning page (Your connection is private page)

cause: self signed certificate that Ingress-nginx uses. Chrome does not trust that.

type thisisunsafe into the window like an cheat code.

# gloud commands

gcloud.cmd for bash

for skaffold, if no default credentials use:
gcloud auth application-default login

# gcloud dev with skaffold

skaffold is made by google affiliated devs therefore it's got good gcloud integrations built-in.

# Notes on local vs remote K8s

for future skaffold config and depl yaml:

us.gcr.io/ticketing-dev-301615/<name>
