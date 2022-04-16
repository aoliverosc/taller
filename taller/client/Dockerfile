FROM node
COPY . /app
WORKDIR /app
RUN npm install --only=production
ENV PORT 3003
ENV HOST localhost
ENV PORTGET 3001
ENV PORTPOST 3002
EXPOSE 3003
ENTRYPOINT ["npm", "start"]
