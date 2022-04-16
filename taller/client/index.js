"use strict";

const express = require("express");
require("express-async-errors");

const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");

const { PORT } = require("./src/config");
const { ControllerGetIp, NotFoundMiddleware, ErrorMiddleware } = require("./src");

const app = express();
const apiRoutes = express.Router();
const router = express.Router();

apiRoutes
  .use(cors())
  .use(helmet())
  .use(express.json())
  .use(compression());

apiRoutes.get("/api/v1/client", ControllerGetIp.getIps);
router.use("/", apiRoutes);
router.use(NotFoundMiddleware);
router.use(ErrorMiddleware);

app.use(router);

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`);
});