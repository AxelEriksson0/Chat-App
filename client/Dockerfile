FROM node:latest AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:latest
RUN npm install serve -g
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]