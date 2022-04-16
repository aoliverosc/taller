FROM node
COPY . /app
WORKDIR /app
RUN npm install --only=production
ENV PORT 3001
EXPOSE 3001
ENTRYPOINT ["npm", "start"]
