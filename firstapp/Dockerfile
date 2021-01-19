FROM node
WORKDIR '/app'
COPY package.json .
RUN npm install
RUN npm i abc
COPY . .
EXPOSE 8990
CMD ["npm","start"]