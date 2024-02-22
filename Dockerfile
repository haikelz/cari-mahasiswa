FROM node:alpine AS build

RUN npm install -g pnpm turbo
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . ./
RUN turbo run build

# run dev
CMD ["turbo", "run", "dev"]
