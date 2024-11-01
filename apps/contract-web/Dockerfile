##################################
#  BASE
##################################
FROM node:22-alpine AS base

##################################
#  BUILDER
##################################
FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune contract-web --docker

##################################
# INSTALLER
##################################
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN yarn install
COPY --from=builder /app/out/full/ .
RUN yarn turbo build --filter=contract-web

##################################
# RUNNER
##################################
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs
USER nuxtjs
COPY --from=installer --chown=nuxtjs:nodejs /app/apps/contract-web/.output ./
CMD node server/index.mjs