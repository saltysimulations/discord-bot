FROM node:16-alpine as ts-compiler
# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY package*.json ./
COPY tsconfig*.json ./
# Install app dependencies
RUN npm install
# Copy source
COPY . ./
# run build
RUN npm run build:typescript
### Production stage
FROM node:16-alpine as production
# Create app directory
WORKDIR /usr/src/app
## Copy compiled files
COPY --from=ts-compiler /usr/src/app/package*.json ./
COPY --from=ts-compiler /usr/src/app/build ./build
# run build
RUN npm install --only=production
# create entry point
CMD ["npm", "run" , "run:node"]
