"use strict";

if (process.env.NODE_ENV != "production") {
    require('dotenv').config({ path: '.env' });
}

module.exports = {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    PORTGET: process.env.PORTGET,
    PORTPOST: process.env.PORTPOST
}
