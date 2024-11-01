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
RUN turbo prune contract-service --docker

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
RUN yarn prisma generate --schema=apps/contract-service/prisma/schema.prisma
RUN yarn turbo build --filter=contract-service...

##################################
# RUNNER
##################################
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
USER root
RUN chown -R nestjs:nodejs /app
USER nestjs
COPY --from=installer --chown=nestjs:nodejs /app .

CMD node apps/contract-service/dist/src/infra/main.js
