"use strict";

const { Ip } = require("./ip.model");

const createOne = async (ip) => {
    return await Ip.create(ip);
}

const getAll = async () => {
    return await Ip.find();
}

module.exports = {
    getAll,
    createOne
}