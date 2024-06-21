# Frontend
FROM node:20 as builder-frontend

WORKDIR /app

COPY frontend /app

RUN corepack enable && pnpm i && NODE_ENV=production pnpm run build

# Backend
FROM node:20 as builder-backend

WORKDIR /app

COPY backend /app

RUN corepack enable && pnpm i

# Final image
FROM node:20

RUN apt-get update && apt-get install -y supervisor nginx
RUN mkdir -p /var/log/supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

COPY --from=builder-frontend /app/dist/frontend/browser/ /var/www/html
COPY --from=builder-backend /app /app/backend

WORKDIR /app/backend
RUN corepack enable && pnpm install --prod --frozen-lockfile

COPY docker/nginx.conf /etc/nginx/nginx.conf

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 3000
ENV LOG_LEVEL info

EXPOSE 80

CMD ["/usr/bin/supervisord"]