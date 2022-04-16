"use strict";

const { createOne, getAll } = require("./ip.repository");

const createIpService = async ( ip ) => {
    return await createOne(ip);
};

const getAllIps = async () => {
    return await getAll();
};

module.exports = {
    getAllIps,
    createIpService
}