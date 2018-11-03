FROM node:9

ENV DIR /app 

RUN mkdir -p ${DIR}
WORKDIR ${DIR} 

COPY package.json /app
RUN npm install
COPY . ${DIR} 
RUN chmod +x boot.sh


EXPOSE 8080
ENTRYPOINT [ "./boot.sh" ]