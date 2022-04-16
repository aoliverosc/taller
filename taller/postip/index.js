"use strict";

const express = require("express");
require("express-async-errors");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

const { PORT, MONGO_URI } = require("./src/config");
const { IpController, NotFoundMiddleware, ErrorMiddleware } = require("./src");

const app = express();
const apiRoutes = express.Router();
const router = express.Router();

apiRoutes
  .use(cors())
  .use(helmet())
  .use(express.json())
  .use(compression());

apiRoutes.get("/api/v1/postip", IpController.getIps);
apiRoutes.post("/api/v1/postip/create", IpController.createIp);
router.use("/", apiRoutes);
router.use(NotFoundMiddleware);
router.use(ErrorMiddleware);

app.use(router);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    console.log("Conectadito a la DB"),
    app.listen(PORT, () => {
      console.log(`Escuchando en el puerto: ${PORT}`);
  })
  )
  .catch((error) => console.log(`Error en la DB: ${error}`));