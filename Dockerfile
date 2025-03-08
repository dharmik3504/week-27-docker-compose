FROM node:20-alpine
WORKDIR /app
COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm
RUN pnpm install 
COPY . .
RUN npx prisma generate
RUN pnpm run build
RUN echo $DATABASE_URL
EXPOSE 3000
CMD [ "pnpm","run","dev:docker" ]