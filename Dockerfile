FROM node:9

ENV DIR /app 

RUN mkdir -p ${DIR}
WORKDIR ${DIR} 

COPY package.json /app
RUN npm install
COPY . . 



EXPOSE 8080
CMD ["npm", "start"]