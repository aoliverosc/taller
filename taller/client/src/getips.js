"use strict";

const axios = require("axios");
const { HOST, PORTGET, PORTPOST } = require("./config");

const getIps = async (req, res) => {
	try {
		const responseListIps = await axios({
			url: `http://${HOST}:${PORTGET}/api/v1/getip`,
			method: "get",
		});

		const responseBlackList = await axios({
			url: `http://${HOST}:${PORTPOST}/api/v1/postip`,
			method: "get",
		});

		const blackListMapped = responseBlackList.data.map((item) => item.ip);

		const responseFiltered = responseListIps.data.filter((ip) => !blackListMapped.includes(ip));

		res.status(200).send(responseFiltered);
	} catch (err) {
		res.status(500).send({ message: err });
	}
};

module.exports = {
	getIps
};