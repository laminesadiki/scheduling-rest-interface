FROM node:14

# Working Dir
WORKDIR /usr/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# Copy Package json files 
COPY package*.json ./

# Install app dependencies
RUN npm install

# Insstall Prettier (For our package's build function)
RUN npm install -g prettier

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source <=> copy all files into work directory
COPY . .

# Build
RUN npm run build

# Expose the API Port
EXPOSE ${SERVER_POR}

CMD ["node","dist/app.js"]
