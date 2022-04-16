FROM node
COPY . /app
WORKDIR /app
RUN npm install --only=production
ENV PORT 3002
ENV MONGO_URI mongodb+srv://dba_mongo_style:dba_style@stylecluster.ltdi5.mongodb.net/manageips?w=majority&retryWrites=true
EXPOSE 3002
ENTRYPOINT ["npm", "start"]
