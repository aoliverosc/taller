"use strict";

const { Ip } = require("./ip.model");
const { createIpService, getAllIps } = require("./ip.service");

const getIps = async (req, res) => {
	const ips = await getAllIps();
	return res.send(ips);
  };

const createIp = async (req, res) => {
	const ipClient = req.body.ip;
	const validateIp = new RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$');
	
	if(!validateIp.test(ipClient)) {
		return res.send("La ip ingresada no es válida");
	}

	const resourceIp = new Ip({
		ip: req.body.ip,
	});
	const createdIp = await createIpService(resourceIp);
	return res.send(createdIp);
};

module.exports = {
	getIps,
	createIp
};